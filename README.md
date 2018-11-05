# baidufanyiQueryJsonFormat
Format the interpretation of Oxford dictionary in Baidu Fanyi

该js将百度翻译单词查询到的json进行转化，提取了关键有用的数据进行整合

以**take**为例

转化后的格式如下：

```json
{frequence: "5", name: "take", id_indic: "31692", emphasize: "take", means: Array(10), …}
classes: (2) ["verb", "noun"]
emphasize: "take"
frequence: "5"
id_indic: "31692"
keys: (8) ["采取", "拿", "取", "接受", "耗费", "获得", "镜头", "看法"]
list: Array(2)
0:
classes: ["verb"]
derivatives: []
helps: []
idioms: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
meanings: (30) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
phrases: (44) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
property: "meanings_list"
__proto__: Object
1: {classes: Array(1), idioms: Array(1), phrases: Array(0), meanings: Array(3), derivatives: Array(0), …}
length: 2
__proto__: Array(0)
means: (10) ["采取", "拿，取", "接受", "耗费", "拿", "获得", "镜头", "看法", "收入额", "场景"]
name: "take"
tags: {core: Array(2), other: Array(1)}
__proto__: Object
```



转化之前格式控制台输出信息如下：

```json
{trans_result: {…}, dict_result: {…}, liju_result: {…}, logid: 4233274789}
dict_result:
collins: {menus: Array(2), word_name: "take", word_id: "31692", word_emphasize: "take", frequence: "5"}
edict: {item: Array(2), word: "take"}
from: "kingsoft"
lang: "1"
oxford:
entry: Array(1)
0: {tag: "entry", name: "take", data: Array(3)}
length: 1
__proto__: Array(0)
unbox: (2) [{…}, {…}]
__proto__: Object
sanyms: [{…}]
simple_means:
exchange: {word_third: Array(1), word_done: Array(1), word_pl: "", word_est: "", word_ing: Array(1), …}
from: "kingsoft"
is_CRI: 1
items: [""]
symbols: [{…}]
tags: {core: Array(2), other: Array(1)}
word_means: (10) ["采取", "拿，取", "接受", "耗费", "拿", "获得", "镜头", "看法", "收入额", "场景"]
word_name: "take"
__proto__: Object
synonym: (5) [{…}, {…}, {…}, {…}, {…}]
usecase: {phrasalverb: {…}, idiom: Array(2)}
zdict: ""
__proto__: Object
liju_result: {double: "[[[["She","w_0","w_0,w_8",0," "],["was","w_1","w_1…53cc\u89e3\u5b66\u4e60\u8bcd\u5178\u300b",62243]]", tag: Array(8), single: "[[[["Take","w_0",0," "],["last","w_1",0," "],["yea…/life\/2012-07\/02\/content_15541330.htm",92377]]"}
logid: 4233274789
trans_result:
data: [{…}]
domain: "all"
from: "en"
phonetic: [{…}]
status: 0
to: "zh"
type: 2
__proto__: Object
__proto__: Object
```

其中关键信息存储在**oxford.entry**和**simple_means**中

oxford.entry原格式如下：

```json
oxford:
entry: Array(1)
0:
data: Array(3)
0:
data: (2) [{…}, {…}]
tag: "h-g"
__proto__: Object
1:
data: (34) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
tag: "p-g"
__proto__: Object
2:
data: (5) [{…}, {…}, {…}, {…}, {…}]
tag: "p-g"
__proto__: Object
length: 3
__proto__: Array(0)
name: "take"
tag: "entry"
__proto__: Object
length: 1
__proto__: Array(0)
unbox: (2) [{…}, {…}]
__proto__: Object
```



转化后的格式如下：

```json
list: Array(2)
0:
classes: ["verb"]
derivatives: []
helps: []
idioms: Array(10)
0: {type: "idiom", before: Array(2), content: " I, you, etc. can't take sb anywhere", chText: "（用以表示不相信某人会在公共场合行为得体）到哪儿都拿不出去", enText: "used to say that you cannot trust sb to behave well in public"}
1: {type: "idiom", content: "have (got) what it takes", before: Array(1), chText: "具备（成功）所需要的一切条件（或素质、能力等）", enText: "to have the qualities, ability, etc. needed to be successful"}
2: {type: "idiom", content: "take sb as they come", chText: "安于现状；顺其自然", enText: "to accept sth/sb without wishing it/them to be dif…thout thinking about it/them very much in advance", examples: Array(1)}
3: {type: "idiom", content: "take it (that…)", chText: "假定；假设；设想；以为", enText: "to suppose; to assume", examples: Array(1)}
4: {type: "idiom", content: "take it from me (that…)", before: Array(1), chText: "我敢担保；我说的肯定没错", enText: "used to emphasize that what you are going to say is the truth", …}
5: {type: "idiom", content: "take it on/upon yourself to do sth", chText: "擅自作主；自作主张", enText: "to decide to do sth without asking permission or advice"}
6: {type: "idioms", content: "sb can take it or leave it", list: Array(2), isArr: true}
7: {type: "idiom", content: "take it/a lot out of sb", chText: "使精疲力竭；使心力交瘁", enText: "to make sb physically or mentally tired", examples: Array(1)}
8: {type: "idiom", content: "take some/a lot of doing", before: Array(1), chText: "费力；费时；难办；难做", enText: "to need a lot of effort or time; to be very difficult to do"}
9: {type: "idiom", content: "take that!", before: Array(1), chText: "（打人时说）看打，接招", enText: "used as an exclamation when you are hitting sb or attacking them in some other way"}
length: 10
__proto__: Array(0)
meanings: Array(30)
0: {type: "means", chText: "携带；带领", enText: "carry/lead", list: Array(3), isArr: true}
1: {type: "means", chText: "伸手取", enText: "reach and hold", list: Array(1), isArr: true}
2: {type: "means", chText: "移开", enText: "remove", list: Array(3), isArr: true}
3: {type: "means", chText: "捕获", enText: "capture", list: Array(1), isArr: true}
4: {type: "means", chText: "选择；购买", enText: "choose/buy", list: Array(2), isArr: true}
5: {type: "means", chText: "食用；饮用", enText: "eat/drink", list: Array(1), isArr: true}
6: {type: "means", chText: "数学", enText: "mathematics", list: Array(1), isArr: true}
7: {type: "means", chText: "写下", enText: "write down", list: Array(1), isArr: true}
8: {type: "means", chText: "拍照", enText: "photograph", list: Array(1), isArr: true}
9: {type: "means", chText: "计量", enText: "measurement", list: Array(1), isArr: true}
10: {type: "means", chText: "座位", enText: "seat", list: Array(1), isArr: true}
11: {type: "means", chText: "举例", enText: "give example", list: Array(1), isArr: true}
12: {type: "means", chText: "接受；收到", enText: "accept/receive", list: Array(5), isArr: true}
13: {type: "means", chText: "考虑", enText: "consider", list: Array(2), isArr: true}
14: {type: "means", chText: "有感情 / 看法", enText: "have feeling/opinion", list: Array(1), isArr: true}
15: {type: "means", chText: "行动", enText: "action", list: Array(2), isArr: true}
16: {type: "means", chText: "形式；位置", enText: "form/position", list: Array(1), isArr: true}
17: {type: "means", chText: "时间", enText: "time", list: Array(1), isArr: true}
18: {type: "means", chText: "需要", enText: "need", list: Array(2), isArr: true}
19: {type: "means", chText: "鞋 / 衣服的尺码", enText: "size of shoes/clothes", list: Array(1), isArr: true}
20: {type: "means", chText: "装得下；包含", enText: "hold/contain", list: Array(1), isArr: true}
21: {type: "means", chText: "讲授；带领", enText: "teach/lead", list: Array(1), isArr: true}
22: {type: "means", chText: "学习", enText: "study", list: Array(1), isArr: true}
23: {type: "means", chText: "考试", enText: "exam", list: Array(1), isArr: true}
24: {type: "means", chText: "交通工具；道路", enText: "transport/road", list: Array(1), isArr: true}
25: {type: "means", chText: "越过；绕路走", enText: "go over/around", list: Array(1), isArr: true}
26: {type: "means", chText: "体育运动", enText: "in sports", list: Array(1), isArr: true}
27: {type: "means", chText: "投票；调查", enText: "vote/survey", list: Array(1), isArr: true}
28: {type: "means", chText: "成功", enText: "be successful", list: Array(1), isArr: true}
29: {type: "means", chText: "语法", enText: "grammar", list: Array(1), isArr: true}
length: 30
__proto__: Array(0)
phrases: Array(44)
0: {type: "phrase", content: "take sb aback", before: Array(1), chText: "使…震惊；使…大吃一惊", enText: "to shock or surprise sb very much"}
1: {type: "phrases", content: "take after sb", alone: Array(1), list: Array(2), isArr: true}
2: {type: "phrase", content: "take against sb/sth", before: Array(3), chText: "（说不清原因地）开始不喜欢", enText: "to start not liking sb/sth for no clear reason"}
3: {type: "phrases", content: "take sb/sth↔apart", alone: Array(1), list: Array(2), isArr: true}
4: {type: "phrase", content: "take sth↔apart", chText: "拆卸，拆散，拆开（机器等）", enText: "to separate a machine or piece of equipment into the different parts that it is made of", synonym: "dismantle"}
5: {type: "phrases", content: "take sth↔away", list: Array(2), isArr: true}
6: {type: "phrase", content: "take away from sth", before: Array(1), chText: "减少；减弱；贬低", enText: "to make the effort or value of sth seem less", …}
7: {type: "phrase", content: "take sb↔back", chText: "允许（因不合而离去的配偶等）回家；与…重归于好", enText: "to allow sb, such as your husband, wife or partner…me home after they have left because of a problem"}
8: {type: "phrase", content: "take sb back (to…)", chText: "使回想起", enText: "to make sb remember sth", examples: Array(1)}
9: {type: "phrases", content: "take sth↔back", list: Array(2), isArr: true}
10: {type: "phrases", content: "take sth↔down", list: Array(3), isArr: true}
11: {type: "phrases", content: "take sb↔in", list: Array(2), isArr: true}
12: {type: "phrases", content: "take sth↔in", list: Array(6), isArr: true}
13: {type: "phrases", content: "take off", list: Array(3), isArr: true}
14: {type: "phrases", content: "take sb↔off", list: Array(2), isArr: true}
15: {type: "phrases", content: "take sth↔off", list: Array(4), isArr: true}
16: {type: "phrase", content: "take yourself/sb off (to…)", before: Array(1), chText: "（使）离去，走掉；带走", enText: "to leave a place; to make sb leave a place"}
17: {type: "phrase", content: "take sb off sth", before: Array(1), chText: "调离，解除（工作、职务等）；撤掉，拆除（器械）", enText: "to remove sb from sth such as a job, position, piece of equipment, etc.", …}
18: {type: "phrases", content: "take sth off sth", list: Array(2), isArr: true}
19: {type: "phrases", content: "take sb↔on", list: Array(2), isArr: true}
20: {type: "phrase", content: "take sth↔on", before: Array(1), chText: "呈现，具有（特征、外观等）", enText: "to begin to have a particular quality, appearance, etc.", …}
21: {type: "phrases", content: "take sth/sb↔on", list: Array(2), isArr: true}
22: {type: "phrase", content: "take sb↔out", chText: "带某人出去（到餐馆、剧院、俱乐部等）", enText: "to go to a restaurant, theatre, club, etc. with sb you have invited"}
23: {type: "phrase", content: "take sb/sth↔out", before: Array(1), chText: "杀死；毁灭", enText: "to kill sb or destroy sth", …}
24: {type: "phrases", content: "take sth↔out", list: Array(3), isArr: true}
25: {type: "phrase", content: "take sth↔out (against sb)", chText: "发出（传票）", enText: "to start legal action against sb by means of an official document", examples: Array(1)}
26: {type: "phrase", content: "take sth↔out (of sth)", chText: "（从银行账户中）提取（款）", enText: "to obtain money by removing it from your bank account"}
27: {type: "phrase", content: "take sth out of sth", chText: "扣除；减去；抽出", enText: "to remove an amount of money from a larger amount, especially as a payment", examples: Array(1)}
28: {type: "phrase", content: "take it/sth out on sb", chText: "向…发泄；拿…撒气", enText: "to behave in an unpleasant way towards sb because …isappointed, etc., although it is not their fault", examples: Array(2)}
29: {type: "phrase", content: "take sb out of himself/herself", chText: "使摆脱苦恼；为某人消愁", enText: "to make sb forget their worries and become less concerned with their own thoughts and situation"}
30: {type: "phrase", content: "take over (from sth)", chText: "占上风；取而代之", enText: "to become bigger or more important than sth else; to replace sth", examples: Array(2)}
31: {type: "phrases", content: "take sth↔over (from sb)", list: Array(2), isArr: true}
32: {type: "phrase", content: "take sth↔over", chText: "接收，接管（企业、公司等，尤指通过购买股份）", enText: "to gain control of a business, a company, etc., especially by buying shares", examples: Array(1), …}
33: {type: "phrase", content: "take sb through sth", chText: "帮助某人深入了解；给某人解说", enText: "to help sb learn or become familiar with sth, for example by talking about each part in turn", examples: Array(1)}
34: {type: "phrases", content: "take to sth", alone: Array(1), list: Array(3), isArr: true}
35: {type: "phrase", content: "take to sb/sth", before: Array(1), chText: "开始喜欢；对…产生好感", enText: "to start liking sb/sth", …}
36: {type: "phrase", content: "take up", chText: "继续；接下去", enText: "to continue, especially starting after sb/sth else has finished", examples: Array(1)}
37: {type: "phrase", content: "take up sth", chText: "占用（时间）；占据（空间）", enText: "to fill or use an amount of space or time", examples: Array(2)}
38: {type: "phrases", content: "take sth↔up", list: Array(7), isArr: true}
39: {type: "phrase", content: "take up with sb", before: Array(1), chText: "开始结交（尤指名声不好的人）", enText: "to begin to be friendly with sb, especially sb with a bad reputation"}
40: {type: "phrases", content: "take sb up on sth", list: Array(2), isArr: true}
41: {type: "phrase", content: "take sth up with sb", chText: "向…提出；与…交涉", enText: "to speak or write to sb about sth that they may be able to deal with or help you with", examples: Array(1)}
42: {type: "phrase", content: "be taken up with sth/sb", chText: "致力于；专心于；对…一心一意", enText: "to be giving all your time and energy to sth/sb"}
43: {type: "phrase", content: "be taken with sb/sth", chText: "被…吸引；迷上；对…感兴趣", enText: "to find sb/sth attractive or interesting", examples: Array(2)}
length: 44
__proto__: Array(0)
property: "meanings_list"
__proto__: Object
```

