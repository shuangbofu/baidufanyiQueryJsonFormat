function init(data) {
  var data = JSON.parse(data);
  
  collins = data.dict_result.collins;

  if (collins ===undefined || collins === null) {
    collins = {
      "word_name": data.dict_result.edict.word
    }
  }

  var word = {
    "frequence": collins.frequence,
    "name" : collins.word_name,
    "id_indic" : collins.word_id,
    "emphasize": collins.word_emphasize,
    "means": data.dict_result.simple_means.word_means,
    "tags": data.dict_result.simple_means.tags,
    "keys": data.liju_result.tag
  }

  if (data.dict_result.oxford===undefined) {
    return word;
  }

  var oxford_dic = data.dict_result.oxford.entry[0];
  var start_arr = oxford_dic.data;

  // console.log(start_arr);

  word.list = [];
  word.classes = [];

  transfer(oxford_dic.data, word);

// console.log(word);
  if (word.list.length > 1) {
    word.classes = word.list[0].classes;
    word.list.splice(0,1);
  } else {
    if (word.list[0].classes!==undefined) {
      if(word.list[0].classes.length > 0) {
        word.classes.push(word.list[0].classes[0]);
      }
    }
  }
  console.log(word);
  return word;
}

var xt = "";

function transfer(array, item) {

  for(var i=0; i<array.length; i++) {

    var arr_item = array[i];
    var curr_tag = arr_item.tag;

    if (arr_item.tag === 'p') {
      if (item.classes===undefined) {
        item.classes = [];
      }
      item.classes.push(arr_item.p_text);
    }

    if (curr_tag === 'h-g' || curr_tag === 'p-g') {
      var new_item = {
        "classes": [],
        "idioms": [],
        "phrases": [],
        "meanings": [],
        "derivatives": [],
        "helps": [],
        "property": "meanings_list",
      }
      if (arr_item.data!==undefined) {
        new_item = transfer(arr_item.data, new_item);
        item.list.push(new_item);
      }
    }
    if (curr_tag === 'sd-g') {
      var new_item = {
        'type': 'mean',
      };
      new_item = transfer(arr_item.data, new_item);
      item.meanings.push(new_item);
    }
    
    if (curr_tag === 'n-g') {
      var new_item = {
        'type': 'mean',
      };
      new_item = transfer(arr_item.data, new_item);
      if (item.property === "meanings_list") {
        item.meanings.push(new_item);
      } else {

        if(item.list===undefined) {
          item.list = [];
        } 
        item.list.push(new_item);
      }
      if (item.type === 'phrase' || item.type === 'idiom' || item.type === 'mean') {
        item.isArr = true;
      }
      if(item.type === 'phrase') {
        item.type = 'phrases';
      } 
      if (item.type === 'idiom') {
        item.type = 'idioms';
      } 
      if (item.type === 'mean') {
        item.type = 'means';
      }
    }
    if (curr_tag === 'pvs-g' || curr_tag === 'ids-g' || curr_tag === 'xrs') {
      xt = arr_item.xt;
      if (arr_item.data!==undefined) {
        item = transfer(arr_item.data, item);
      }
    }

    if (curr_tag === 'id-g' || ( curr_tag === 'xr' && xt === 'id')) {
      var idiom = {
        'type': 'idiom',
      };

      if (arr_item.data!==undefined) {
        idiom = transfer(arr_item.data, idiom);
        item.idioms.push(idiom);
      }
    }

    if (curr_tag === 'pv-g') {
      var phrase  = {
        'type': 'phrase',
      };
      phrase = transfer(arr_item.data, phrase);

      item.phrases.push(phrase);
    }

    if (curr_tag === 'dr-g') {
      var derivative = {
        'type': 'derivative',
      }

      derivative = transfer(arr_item.data, derivative);
      if (item.derivatives===undefined) {
        item.derivative = derivative;
      } else {
        item.derivatives.push(derivative);
      }
    }

    if (arr_item.tag === 'alone') {
      var alone = [];
      transferBefore(arr_item.data, alone);
      item.alone = alone;
    }

    if (curr_tag === 'help') {
      if (arr_item.data.length > 1) {
        var help = {}
        help.type = "help";
        help.enText = arr_item.data[0].text;
        help.chText = arr_item.data[1].text;
        if (item.helps===undefined) {
          item.help = help
        } else {
          item.helps.push(help);
        }
      }
    }

    if (item.property === "meanings_list" && (curr_tag === 'cf' || curr_tag === 'd' 
      || curr_tag === 'id' || curr_tag === 'ud' || curr_tag === 'x' ||(curr_tag === 'xr' && arr_item.xt!=='id')
      || curr_tag === 'dr')) {
      // console.log(item);
      var new_item = {};
      if(item.meanings.length === 0) {
        new_item = {
          "type": "mean",
        };
      } else {
        new_item = item.meanings[0];
      }
      
      var new_arr = [];
      new_arr.push(arr_item);
      new_item = transfer(new_arr, new_item);

      if (item.meanings.length === 0) {
        item.meanings.push(new_item);
      } else {
        item.meanings[0] = new_item;
      }
      continue;
    }

    if (arr_item.before!==undefined) {
      item.before = [];
      transferBefore(arr_item.before, item.before);
    }

    if (arr_item.after!==undefined) {
      item.after = [];
      transferBefore(arr_item.after, item.after);
    }

    if (curr_tag === 'cf' || curr_tag === 'cc') {
      item.follow = arr_item.texts[0];
    }
    if (curr_tag === 'd' || curr_tag === 'ud' || curr_tag === 'sd') {
     
      item.chText = arr_item.chText;
      item.enText = arr_item.enText;
    }
    if (curr_tag === 'dr') {
      item.enText = arr_item.data[0].text;
    }
    if (arr_item.tag === 'id' || arr_item.tag === 'pv') {
      item.content = arr_item.enText;
    }
    
    if (curr_tag === 'x') {
      var example = {
        "enText": arr_item.enText,
        "chText": arr_item.chText
      }
      if (arr_item.before!==undefined) {
        example.before = [];
        transferBefore(arr_item.before, example.before);
      }
      if (arr_item.after!==undefined) {
        example.after = [];
        transferBefore(arr_item.after, example.after);
      }
      if (item.examples===undefined) {
        item.examples = [];
      } 
      item.examples.push(example);
    }

    if (curr_tag === 'xr') {
      if (xt !== "" && xt!=="id") {
        var text = arr_item.data[0].text
      }
      if (xt === 'syn') {
        if (item.synonym!==undefined) {
          item.synonym += ", " + text;
        } else {
          item.synonym = text
        }
      } else if (xt === 'opp') {
        if (item.antonym!==undefined) {
          item.antonym += ", " + text;
        } else {
          item.antonym = text
        }
      } else if (xt === 'eq') {
        if (item.equal!==undefined) {
          item.equal += ", " + text;
        } else {
          item.equal = text
        }
      } else if (xt === 'rn') {
        if (item.relation!==undefined) {
          item.relation += ", " + text;
        } else {
          item.relation = text
        }
      } else if(xt === 'useat') {
        if (item.useat!==undefined) {
          item.useat += ", " + text;
        } else {
          item.useat = text
        }
      } else if (xt === 'see') {
        if (item.see!==undefined) {
          item.see += ", " + text;
        } else {
          item.see = text
        }
      } else if (xt === 'cp') {
      }
    }
   
    if (curr_tag === 'as') {
      // todo
    }
    if (curr_tag === 'if-g') {
      // todo
    }
  }
  return item;
}

function transferBefore(before, result) {
  for (var i=0; i<before.length; i++) {
    var before_ = before[i];
    if (before_.data===undefined) {
      result.push(before_);
    } else {
      transferBefore(before_.data, result);
    }
  }
}

// var tag_arr = [];
// var tag_str = "";
// function testPrint(arr_item, item) {
//   console.log(arr_item)
//   console.log(item);
//   console.log("-------------");
// }
// function testCheckTag(tag) {
//   if(tag_str.indexOf(tag)==-1) {
//     tag_str = tag_str + "|" + tag;
//     tag_arr.push(tag);
//   }
// }
