import { csvParse } from "d3-dsv";

const csv2 = `id,datetime,userId,channel,type,value,captureId
"dzskarlqcbnjeptw","2022-02-18T19:00:32.780Z","endbhjqtsymilzwa","eksperiment","DATA_1","0","18_02_2022__20_59_02"
"nmikejgcuozpxlrs","2022-02-18T18:59:35.799Z","ewqunvdltxkrycif","eksperiment","DATA_1","1.68866459627329","18_02_2022__20_59_02"
"lheqsxigyzwotvmp","2022-02-18T18:59:36.665Z","ewqunvdltxkrycif","eksperiment","DATA_1","1.78018245341615","18_02_2022__20_59_02"
"vbcpshartudjkoim","2022-02-18T18:59:42.567Z","ewqunvdltxkrycif","eksperiment","DATA_1","1.49427406832298","18_02_2022__20_59_02"
"xmjqlsgpontkvhfb","2022-02-18T18:59:59.525Z","ewqunvdltxkrycif","eksperiment","DATA_1","1.62043866459627","18_02_2022__20_59_02"
"halrycjpqubmztis","2022-02-18T19:00:08.796Z","ewqunvdltxkrycif","eksperiment","DATA_1","2.03154114906832","18_02_2022__20_59_02"
"ehtaqzlypbkjnwrm","2022-02-18T19:00:09.980Z","ewqunvdltxkrycif","eksperiment","DATA_1","2.04784549689441","18_02_2022__20_59_02"
"ulwhjrvodctxysbe","2022-02-18T19:00:12.065Z","ewqunvdltxkrycif","eksperiment","DATA_1","1.31055900621118","18_02_2022__20_59_02"
"sunchzldpwaxqvbi","2022-02-18T19:00:14.333Z","ewqunvdltxkrycif","eksperiment","DATA_1","2.01708074534161","18_02_2022__20_59_02"
"wygjrmsfedzpcixn","2022-02-18T19:00:15.963Z","ozehytcbwnxiqsga","eksperiment","DATA_1","0.630459551842005","18_02_2022__20_59_02"
"ughacyvpnzebsdil","2022-02-18T19:00:15.917Z","ewqunvdltxkrycif","eksperiment","DATA_1","2.23689829192547","18_02_2022__20_59_02"
"jsfqhkygnctmlvpz","2022-02-18T19:00:22.896Z","cdfzjubmvhynkola","eksperiment","DATA_1","4.46066478439425","18_02_2022__20_59_02"
"esnqarixolvwjupf","2022-02-18T19:00:24.207Z","cdfzjubmvhynkola","eksperiment","DATA_1","1.66621214065708","18_02_2022__20_59_02"
"mltanredbwqoyjig","2022-02-18T19:00:25.073Z","cdfzjubmvhynkola","eksperiment","DATA_1","1.57364925564682","18_02_2022__20_59_02"
"gcdosvmenztfrbqu","2022-02-18T19:00:25.374Z","cdfzjubmvhynkola","eksperiment","DATA_1","1.56891683778234","18_02_2022__20_59_02"
"focjuvdeqrlthbyw","2022-02-18T19:00:26.900Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","1.03760266940452","18_02_2022__20_59_02"
"ibcladjgefkhnmop","2022-02-18T19:00:29.957Z","adbkcjeilognfmhp","eksperiment","DATA_1","0","18_02_2022__20_59_02"
"pvyrtxagslkobczj","2022-02-18T19:00:31.122Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","1.83331372779673","18_02_2022__20_59_02"
"fxoywsrejqkmludp","2022-02-18T19:00:33.326Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","0.458921694480103","18_02_2022__20_59_02"
"eandcurifotshkqm","2022-02-18T19:00:38.240Z","gaitzbxocvshrdly","eksperiment","DATA_1","0.878220140515223","18_02_2022__20_59_02"
"jhicalbnmofpkegd","2022-02-18T19:00:39.581Z","bacdgehfjkilnmpo","eksperiment","DATA_1","1.71114599686028","18_02_2022__20_59_02"
"hqmyortzxlevjbwa","2022-02-18T19:01:42.180Z","endbhjqtsymilzwa","eksperiment","DATA_1","2.25368063420159","18_02_2022__20_59_02"
"ayvxwbzjnfpdeomg","2022-02-18T19:01:43.298Z","endbhjqtsymilzwa","eksperiment","DATA_1","0","18_02_2022__20_59_02"
"gctndxbhleyujaiw","2022-02-18T19:00:46.799Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","0.415008983572895","18_02_2022__20_59_02"
"tnvubgdfralmcowi","2022-02-18T19:00:54.546Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","1.17442065639337","18_02_2022__20_59_02"
"nwvkyjhgcbpzoeax","2022-02-18T19:01:01.517Z","gaitzbxocvshrdly","eksperiment","DATA_1","3.87587822014052","18_02_2022__20_59_02"
"iwhgjfoedurctqnx","2022-02-18T19:01:00.718Z","ozehytcbwnxiqsga","eksperiment","DATA_1","5.69312571211546","18_02_2022__20_59_02"
"wurjxcqhbdsklpae","2022-02-18T19:01:02.357Z","gaitzbxocvshrdly","eksperiment","DATA_1","5.02341920374707","18_02_2022__20_59_02"
"eofsyarkbzhdpqmg","2022-02-18T19:01:06.902Z","alpjhrzgomxfnbuq","eksperiment","DATA_1","1.7331464987715","18_02_2022__20_59_02"
"vmrgepkxuldhtqic","2022-02-18T19:01:06.885Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","0.177425564681725","18_02_2022__20_59_02"
"ibgcfjadklpehnmo","2022-02-18T19:01:06.840Z","bacdgehfjkilnmpo","eksperiment","DATA_1","1.138147566719","18_02_2022__20_59_02"
"cfpltnvkbmayxdgi","2022-02-18T19:01:10.040Z","alpjhrzgomxfnbuq","eksperiment","DATA_1","1.1846398955774","18_02_2022__20_59_02"
"jcybpuadlnqtwoev","2022-02-18T19:01:09.796Z","labosfecrpuztmny","eksperiment","DATA_1","4.19937373580209","18_02_2022__20_59_02"
"uwcgbfpjrlqxseza","2022-02-18T19:01:11.779Z","labosfecrpuztmny","eksperiment","DATA_1","4.03765364866967","18_02_2022__20_59_02"
"ohwtlpdcbaznfqeg","2022-02-18T19:01:13.081Z","labosfecrpuztmny","eksperiment","DATA_1","3.67045277734557","18_02_2022__20_59_02"
"uldfwhtvyzjpqaim","2022-02-18T19:01:14.653Z","ozehytcbwnxiqsga","eksperiment","DATA_1","1.87998480820357","18_02_2022__20_59_02"
"pojeykmqrdczgbnu","2022-02-18T19:01:15.867Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","0.553317256793318","18_02_2022__20_59_02"
"agbkpumijfnowexc","2022-02-18T19:01:16.418Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","0.431125749911775","18_02_2022__20_59_02"
"gxqevkrudpsicmbh","2022-02-18T19:01:17.348Z","fmaihbylvexsdcuq","eksperiment","DATA_1","4.75776437371663","18_02_2022__20_59_02"
"asuwhktibcqxegjp","2022-02-18T19:01:16.795Z","labosfecrpuztmny","eksperiment","DATA_1","3.29693091644624","18_02_2022__20_59_02"
"pceszgfbrqoiydam","2022-02-18T19:01:17.445Z","labosfecrpuztmny","eksperiment","DATA_1","3.25336471137389","18_02_2022__20_59_02"
"kmanibwltzuocypd","2022-02-18T19:01:19.694Z","gaitzbxocvshrdly","eksperiment","DATA_1","3.96955503512881","18_02_2022__20_59_02"
"tspaqublxcdghvze","2022-02-18T19:01:19.612Z","labosfecrpuztmny","eksperiment","DATA_1","2.97951999377626","18_02_2022__20_59_02"
"nogfawibzyxceupm","2022-02-18T19:01:21.074Z","cdfzjubmvhynkola","eksperiment","DATA_1","0.84525795687885","18_02_2022__20_59_02"
"zjysabcdrikqetlv","2022-02-18T19:01:24.443Z","adbkcjeilognfmhp","eksperiment","DATA_1","0.0626304801670146","18_02_2022__20_59_02"
"binljhmpkfaodegc","2022-02-18T19:01:24.892Z","adbkcjeilognfmhp","eksperiment","DATA_1","0.104384133611691","18_02_2022__20_59_02"
"bdsqtmjepvcknalh","2022-02-18T19:02:25.134Z","endbhjqtsymilzwa","eksperiment","DATA_1","2.69535673839185","18_02_2022__20_59_02"
"rhzwbjtxylfamvkp","2022-02-18T19:02:26.413Z","endbhjqtsymilzwa","eksperiment","DATA_1","10","18_02_2022__20_59_02"
"ldbzrsmpexqkftyv","2022-02-18T19:01:27.263Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","7.20867556468173","18_02_2022__20_59_02"
"agltdorxmywiznpk","2022-02-18T19:02:27.353Z","endbhjqtsymilzwa","eksperiment","DATA_1","9.61494903737259","18_02_2022__20_59_02"
"thugdckaljoqpebz","2022-02-18T19:02:29.452Z","endbhjqtsymilzwa","eksperiment","DATA_1","2.00453001132503","18_02_2022__20_59_02"
"dqomtykgihznxcpb","2022-02-18T19:01:32.622Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","0.815098819301848","18_02_2022__20_59_02"
"ebxmyowuzdvfktng","2022-02-18T19:01:32.801Z","fmaihbylvexsdcuq","eksperiment","DATA_1","3.0534522587269","18_02_2022__20_59_02"
"fkaonehimgdjpbcl","2022-02-18T19:01:38.816Z","adbkcjeilognfmhp","eksperiment","DATA_1","0.0069589422407794","18_02_2022__20_59_02"
"egfhabcdikmojnlp","2022-02-18T19:01:41.095Z","adbkcjeilognfmhp","eksperiment","DATA_1","0.264439805149617","18_02_2022__20_59_02"
"jundatlqprsofxwv","2022-02-18T19:01:44.312Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","0.0735207622632631","18_02_2022__20_59_02"
"wndbmcesvaqxhpft","2022-02-18T19:01:45.622Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","2.13183393223819","18_02_2022__20_59_02"
"rzaymubcjdftelgw","2022-02-18T19:01:48.354Z","alpjhrzgomxfnbuq","eksperiment","DATA_1","3.1899761977887","18_02_2022__20_59_02"
"gnvfieqduwocxtpl","2022-02-18T19:01:49.259Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","3.48523748395379","18_02_2022__20_59_02"
"nuqexpkcfotzbyia","2022-02-18T19:01:56.730Z","gaitzbxocvshrdly","eksperiment","DATA_1","5.2576112412178","18_02_2022__20_59_02"
"cfiyghnqduajrowe","2022-02-18T19:01:58.304Z","ozehytcbwnxiqsga","eksperiment","DATA_1","8.55677933915686","18_02_2022__20_59_02"
"cabdgfehkopmjinl","2022-02-18T19:02:06.029Z","qtbcgdrfsewahulj","eksperiment","DATA_1","0.439698492462312","18_02_2022__20_59_02"
"daubrihytxlqmkvc","2022-02-18T19:02:05.193Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","3.10222022587269","18_02_2022__20_59_02"
"qractbsxdfewvugh","2022-02-18T19:02:05.374Z","adbkcjeilognfmhp","eksperiment","DATA_1","0.883785664578984","18_02_2022__20_59_02"
"hryzfqtcbadsegwv","2022-02-18T19:02:08.938Z","adbkcjeilognfmhp","eksperiment","DATA_1","0.897703549060543","18_02_2022__20_59_02"
"rfusqetmwxvyzhng","2022-02-18T19:02:14.317Z","adbkcjeilognfmhp","eksperiment","DATA_1","0.473208072372999","18_02_2022__20_59_02"
"jmewscrqfhlxdkib","2022-02-18T19:02:16.665Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","2.3395378690629","18_02_2022__20_59_02"
"ojpgtwnczhiyaevq","2022-02-18T19:02:16.167Z","cdfzjubmvhynkola","eksperiment","DATA_1","0.479738834702259","18_02_2022__20_59_02"
"icxgolwrkqfunmat","2022-02-18T19:02:16.774Z","cdfzjubmvhynkola","eksperiment","DATA_1","0.482064938398357","18_02_2022__20_59_02"
"xogtfiqkrnemdhvc","2022-02-18T19:03:18.125Z","endbhjqtsymilzwa","eksperiment","DATA_1","4.58663646659117","18_02_2022__20_59_02"
"hsuwylzagbxftvjq","2022-02-18T19:03:18.658Z","endbhjqtsymilzwa","eksperiment","DATA_1","4.72253680634202","18_02_2022__20_59_02"
"mbzcaykdiqhgtsjf","2022-02-18T19:02:20.744Z","adbkcjeilognfmhp","eksperiment","DATA_1","0.424495476687543","18_02_2022__20_59_02"
"jzyvtuqixswdrkel","2022-02-18T19:02:21.292Z","adbkcjeilognfmhp","eksperiment","DATA_1","0.403618649965205","18_02_2022__20_59_02"
"cfwbqaupgxslnhdv","2022-02-18T19:02:21.583Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","0","18_02_2022__20_59_02"
"adblmkceghfnojpi","2022-02-18T19:02:21.843Z","adbkcjeilognfmhp","eksperiment","DATA_1","0.361864996520529","18_02_2022__20_59_02"
"bacdeghfikonmlpj","2022-02-18T19:02:22.293Z","adbkcjeilognfmhp","eksperiment","DATA_1","0.340988169798191","18_02_2022__20_59_02"
"wjslrquntikvmcxy","2022-02-18T19:02:23.125Z","adbkcjeilognfmhp","eksperiment","DATA_1","0.320111343075852","18_02_2022__20_59_02"
"cbqdsragftehvjui","2022-02-18T19:02:24.040Z","adbkcjeilognfmhp","eksperiment","DATA_1","0.306193458594294","18_02_2022__20_59_02"
"cbdaegfhmnipkjlo","2022-02-18T19:02:25.989Z","adbkcjeilognfmhp","eksperiment","DATA_1","0.257480862908838","18_02_2022__20_59_02"
"hgebacfdjiknmpol","2022-02-18T19:02:26.389Z","adbkcjeilognfmhp","eksperiment","DATA_1","0.2366040361865","18_02_2022__20_59_02"
"ambghxptocvkiufy","2022-02-18T19:02:27.281Z","fmaihbylvexsdcuq","eksperiment","DATA_1","6.5427682238193","18_02_2022__20_59_02"
"ebqrcstvufwxzdgy","2022-02-18T19:02:27.838Z","adbkcjeilognfmhp","eksperiment","DATA_1","0.139178844815588","18_02_2022__20_59_02"
"sltedxzirhgbqaok","2022-02-18T19:02:30.342Z","labosfecrpuztmny","eksperiment","DATA_1","2.49406799439863","18_02_2022__20_59_02"
"hcjbwdltpmvaqoxf","2022-02-18T19:02:33.368Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","2.24220354209446","18_02_2022__20_59_02"
"bmisahdlcqoxwkpu","2022-02-18T19:02:38.192Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","1.62708600770218","18_02_2022__20_59_02"
"ebdhcafglijknopm","2022-02-18T19:02:46.227Z","adbkcjeilognfmhp","eksperiment","DATA_1","1.66318719554628","18_02_2022__20_59_02"
"mzpabovhrstkwifl","2022-02-18T19:02:48.041Z","ozehytcbwnxiqsga","eksperiment","DATA_1","1.7052791492594","18_02_2022__20_59_02"
"nawbrxckzdlighvy","2022-02-18T19:02:52.200Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","1.16816431322208","18_02_2022__20_59_02"
"xadwmrytienzkhfb","2022-02-18T19:02:54.174Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","1.54870379876797","18_02_2022__20_59_02"
"tyrfzeqbsvgduawc","2022-02-18T19:02:58.611Z","adbkcjeilognfmhp","eksperiment","DATA_1","3.05497564370216","18_02_2022__20_59_02"
"ilcabdfjeghkmnop","2022-02-18T19:02:59.376Z","adbkcjeilognfmhp","eksperiment","DATA_1","3.01322199025748","18_02_2022__20_59_02"
"ujdixcgobzymalqn","2022-02-18T19:03:02.072Z","labosfecrpuztmny","eksperiment","DATA_1","1.95039767268069","18_02_2022__20_59_02"
"sfcmkaenhdbwlgyt","2022-02-18T19:03:09.585Z","gaitzbxocvshrdly","eksperiment","DATA_1","3.14988290398127","18_02_2022__20_59_02"
"cnbdeigtmxuvoshr","2022-02-18T19:03:18.668Z","fmaihbylvexsdcuq","eksperiment","DATA_1","4.89091375770021","18_02_2022__20_59_02"
"wafnjtqbegoszudy","2022-02-18T19:03:19.968Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","2.54180602006689","18_02_2022__20_59_02"
"lpbvzenarjyqcdkg","2022-02-18T19:03:21.659Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","0.530837223160195","18_02_2022__20_59_02"
"skjqhiwrxzogmufa","2022-02-18T19:03:26.603Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","0.645057766367137","18_02_2022__20_59_02"
"dsazpeihxltqkcnr","2022-02-18T19:03:27.325Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","2.35241273100616","18_02_2022__20_59_02"
"dzcxmqnfvrkbleua","2022-02-18T19:03:31.139Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","0.802675585284281","18_02_2022__20_59_02"
"vgqhfeusrxdbwack","2022-02-18T19:03:35.806Z","adbkcjeilognfmhp","eksperiment","DATA_1","3.0062630480167","18_02_2022__20_59_02"
"qwudbactgvshfxej","2022-02-18T19:03:36.427Z","adbkcjeilognfmhp","eksperiment","DATA_1","2.37299930410578","18_02_2022__20_59_02"
"hfliartyubxcosdg","2022-02-18T19:03:40.361Z","fmaihbylvexsdcuq","eksperiment","DATA_1","5.36880775154004","18_02_2022__20_59_02"
"adpzhtywmqlskunv","2022-02-18T19:03:42.285Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","2.88821868583162","18_02_2022__20_59_02"
"yarstjphogbczdef","2022-02-18T19:03:44.474Z","ozehytcbwnxiqsga","eksperiment","DATA_1","8.79605013292822","18_02_2022__20_59_02"
"abcdersfwgtqhvum","2022-02-18T19:03:47.551Z","adbkcjeilognfmhp","eksperiment","DATA_1","3.31941544885177","18_02_2022__20_59_02"
"fdokneiapjgmhcbl","2022-02-18T19:03:50.300Z","adbkcjeilognfmhp","eksperiment","DATA_1","3.36116910229645","18_02_2022__20_59_02"
"jwuqfdcgozervysn","2022-02-18T19:03:51.680Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","1.92554557124519","18_02_2022__20_59_02"
"bcmordefxvyigjlk","2022-02-18T19:03:50.912Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","7.42628657597536","18_02_2022__20_59_02"
"lxhjsawbgqprivyc","2022-02-18T19:03:52.144Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","8.00989797227926","18_02_2022__20_59_02"
"cidxkfwrmavptjhs","2022-02-18T19:03:52.678Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","3.73668506160164","18_02_2022__20_59_02"
"cvxdohjqybtinmka","2022-02-18T19:03:53.403Z","labosfecrpuztmny","eksperiment","DATA_1","2.21088662325184","18_02_2022__20_59_02"
"abcdehfgmknjolip","2022-02-18T19:03:54.829Z","adbkcjeilognfmhp","eksperiment","DATA_1","6.35351426583159","18_02_2022__20_59_02"
"mrybsnkditfveqwg","2022-02-18T19:03:55.262Z","alpjhrzgomxfnbuq","eksperiment","DATA_1","2.81115632678133","18_02_2022__20_59_02"
"jsqfltruwivxyzke","2022-02-18T19:03:55.328Z","adbkcjeilognfmhp","eksperiment","DATA_1","6.22825330549756","18_02_2022__20_59_02"
"whgnyqjctxfmipae","2022-02-18T19:03:56.535Z","labosfecrpuztmny","eksperiment","DATA_1","2.22796786591225","18_02_2022__20_59_02"
"aytpqrfdnwcoubge","2022-02-18T19:03:57.936Z","labosfecrpuztmny","eksperiment","DATA_1","2.34753656453507","18_02_2022__20_59_02"
"xemwrucbgqhojasn","2022-02-18T19:04:00.555Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","3.01347881899872","18_02_2022__20_59_02"
"obcwghxqjsevfuiz","2022-02-18T19:03:59.769Z","labosfecrpuztmny","eksperiment","DATA_1","2.52268602540835","18_02_2022__20_59_02"
"boruwshjqzylnpdf","2022-02-18T19:04:06.488Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","1.23783394577416","18_02_2022__20_59_02"
"uoldkxwqertfjyzn","2022-02-18T19:04:13.458Z","cdfzjubmvhynkola","eksperiment","DATA_1","1.92264502053388","18_02_2022__20_59_02"
"ghjslodrpqcmbzvx","2022-02-18T19:04:14.423Z","cdfzjubmvhynkola","eksperiment","DATA_1","2.87313911704312","18_02_2022__20_59_02"
"beuvhydrjcfapxgz","2022-02-18T19:04:16.902Z","labosfecrpuztmny","eksperiment","DATA_1","1.71553058610014","18_02_2022__20_59_02"
"emcfklqhuwxpbova","2022-02-18T19:04:22.092Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","4.44638732032854","18_02_2022__20_59_02"
"qphydozgsxwcvutr","2022-02-18T19:04:30.669Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","0","18_02_2022__20_59_02"
"baliryzxuqdgfmej","2022-02-18T19:04:42.250Z","labosfecrpuztmny","eksperiment","DATA_1","1.44650101419878","18_02_2022__20_59_02"
"elczfriwqaxsmbyd","2022-02-18T19:04:43.578Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","4.76923447125257","18_02_2022__20_59_02"
"qipyhglrfwxadzjn","2022-02-18T19:04:44.652Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","5.05823280287474","18_02_2022__20_59_02"
"ombtsqzjdghewrac","2022-02-18T19:04:46.893Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","6.5319398100616","18_02_2022__20_59_02"
"dozsaxumfengrhip","2022-02-18T19:04:52.043Z","gaitzbxocvshrdly","eksperiment","DATA_1","6.29976580796253","18_02_2022__20_59_02"
"ntphigvfrsawmbje","2022-02-18T19:04:50.219Z","labosfecrpuztmny","eksperiment","DATA_1","1.34828386890146","18_02_2022__20_59_02"
"mlsxnrvkdcygzhbo","2022-02-18T19:04:53.143Z","gaitzbxocvshrdly","eksperiment","DATA_1","7.92740046838408","18_02_2022__20_59_02"
"tshubxjimcoqwnrp","2022-02-18T19:04:57.109Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","5.16491273100616","18_02_2022__20_59_02"
"keosdqhjyubtmnpf","2022-02-18T19:04:57.916Z","labosfecrpuztmny","eksperiment","DATA_1","1.24586313654318","18_02_2022__20_59_02"
"deabmlcjkztgxsyo","2022-02-18T19:04:59.156Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","2.91439070414142","18_02_2022__20_59_02"
"rzhcgevjlmpiuaoy","2022-02-18T19:04:59.438Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","1.42140468227425","18_02_2022__20_59_02"
"ehmpcwjgfiladtsy","2022-02-18T19:05:01.842Z","alpjhrzgomxfnbuq","eksperiment","DATA_1","2.29432202088452","18_02_2022__20_59_02"
"ncwtbimdasvfhxyg","2022-02-18T19:05:02.543Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","3.95520905750323","18_02_2022__20_59_02"
"acbdefghikjplnmo","2022-02-18T19:05:02.702Z","adbkcjeilognfmhp","eksperiment","DATA_1","6.63883089770355","18_02_2022__20_59_02"
"baefhgcdimknploj","2022-02-18T19:05:06.656Z","qtbcgdrfsewahulj","eksperiment","DATA_1","3.9070351758794","18_02_2022__20_59_02"
"omydhabwfuntrlke","2022-02-18T19:05:03.094Z","odrvxgtmcuwlejny","eksperiment","DATA_1","1.57614887960501","18_02_2022__20_59_02"
"yxbpkjshdzmulvia","2022-02-18T19:05:07.380Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","4.74685574948665","18_02_2022__20_59_02"
"ablwkcxdrqoezpmi","2022-02-18T19:05:08.542Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","3.21964835728953","18_02_2022__20_59_02"
"obfdjknlwzuthxay","2022-02-18T19:05:11.026Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","1.33165426078029","18_02_2022__20_59_02"
"dvhwlgeojqfsnmxr","2022-02-18T19:05:12.172Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","4.44801026957638","18_02_2022__20_59_02"
"lbwnsikzdgptmfhr","2022-02-18T19:05:13.463Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","4.93311036789298","18_02_2022__20_59_02"
"diaesobpzumvcwhg","2022-02-18T19:05:17.274Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","4.2226001026694","18_02_2022__20_59_02"
"navbxscudwqopyez","2022-02-18T19:05:22.008Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","6.11360718870347","18_02_2022__20_59_02"
"wjcikuvgehopytbr","2022-02-18T19:05:19.959Z","odrvxgtmcuwlejny","eksperiment","DATA_1","1.76604633497911","18_02_2022__20_59_02"
"cobkeryxnuamhwdq","2022-02-18T19:05:23.360Z","odrvxgtmcuwlejny","eksperiment","DATA_1","9.27838966957843","18_02_2022__20_59_02"
"cmrbquxjiwfhalpn","2022-02-18T19:05:29.431Z","gaitzbxocvshrdly","eksperiment","DATA_1","8.48946135831382","18_02_2022__20_59_02"
"oyhuwrmavsptibjl","2022-02-18T19:05:32.137Z","gaitzbxocvshrdly","eksperiment","DATA_1","8.43091334894614","18_02_2022__20_59_02"
"gwatpiodyhqfmksj","2022-02-18T19:05:33.236Z","gaitzbxocvshrdly","eksperiment","DATA_1","8.47775175644028","18_02_2022__20_59_02"
"vflywekdicjshmbp","2022-02-18T19:05:34.152Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","4.00298382956879","18_02_2022__20_59_02"
"yagicduemsrbzhln","2022-02-18T19:05:35.070Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","3.79973049281314","18_02_2022__20_59_02"
"gdfocjnptlsqbihm","2022-02-18T19:05:33.225Z","odrvxgtmcuwlejny","eksperiment","DATA_1","8.83770888720091","18_02_2022__20_59_02"
"unakmlzqpbejcoyw","2022-02-18T19:05:41.132Z","labosfecrpuztmny","eksperiment","DATA_1","0.878549695740365","18_02_2022__20_59_02"
"mgeildctrzbopwya","2022-02-18T19:05:42.548Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","3.85986691826398","18_02_2022__20_59_02"
"jdxbopkeiualhsmz","2022-02-18T19:06:42.239Z","endbhjqtsymilzwa","eksperiment","DATA_1","4.12231030577576","18_02_2022__20_59_02"
"oekuhxdtwyfmzsri","2022-02-18T19:05:43.268Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","3.39904657860761","18_02_2022__20_59_02"
"tanhbmqoxivcjudz","2022-02-18T19:06:42.973Z","endbhjqtsymilzwa","eksperiment","DATA_1","3.51075877689694","18_02_2022__20_59_02"
"fhvrptmbyiwkzxsq","2022-02-18T19:05:47.932Z","fynegbqitazohkwm","eksperiment","DATA_1","2.41424802110818","18_02_2022__20_59_02"
"pzlmqadjhxnfkbce","2022-02-18T19:05:44.635Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","2.39782997318502","18_02_2022__20_59_02"
"ejdmliqtzuscbnwg","2022-02-18T19:05:44.787Z","cdfzjubmvhynkola","eksperiment","DATA_1","3.82403426591376","18_02_2022__20_59_02"
"lisfjtdhubgwzexq","2022-02-18T19:05:48.076Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","0.238465734086242","18_02_2022__20_59_02"
"mkwpvxundagqehoy","2022-02-18T19:05:48.825Z","odrvxgtmcuwlejny","eksperiment","DATA_1","5.90581086213445","18_02_2022__20_59_02"
"ikjldbanchgopmef","2022-02-18T19:05:55.356Z","adbkcjeilognfmhp","eksperiment","DATA_1","2.92971468336813","18_02_2022__20_59_02"
"bjsmqozfhepdkxyi","2022-02-18T19:06:07.341Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","3.30916324435318","18_02_2022__20_59_02"
"czkbhymwonvpxufr","2022-02-18T19:06:07.945Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","2.2453856714293","18_02_2022__20_59_02"
"qifbjzsalyxtkwrv","2022-02-18T19:06:09.313Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","3.12401484720598","18_02_2022__20_59_02"
"yzvrsfwqdhplotej","2022-02-18T19:06:10.330Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","3.48197488178167","18_02_2022__20_59_02"
"yzlbwxnmqskfudeg","2022-02-18T19:06:10.712Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","3.54705852443179","18_02_2022__20_59_02"
"irsymheauwblkfxp","2022-02-18T19:06:08.724Z","odrvxgtmcuwlejny","eksperiment","DATA_1","10","18_02_2022__20_59_02"
"ahxgkpirbomvjtdq","2022-02-18T19:06:13.508Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","7.3620025673941","18_02_2022__20_59_02"
"rbhakxvdlcgitewu","2022-02-18T19:06:13.669Z","fmaihbylvexsdcuq","eksperiment","DATA_1","7.80768737166324","18_02_2022__20_59_02"
"uolfcdhptqgeibvj","2022-02-18T19:06:16.817Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","6.86314430430033","18_02_2022__20_59_02"
"kgyanzexrqtwovdj","2022-02-18T19:06:17.302Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","7.09343033071805","18_02_2022__20_59_02"
"lwrsbayudectvngz","2022-02-18T19:06:18.595Z","labosfecrpuztmny","eksperiment","DATA_1","1.18174175296253","18_02_2022__20_59_02"
"emlwstrdkipxcqzg","2022-02-18T19:06:22.994Z","labosfecrpuztmny","eksperiment","DATA_1","1.50201505284509","18_02_2022__20_59_02"
"zaktuxjgirlnvwde","2022-02-18T19:06:25.057Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","3.57097022587269","18_02_2022__20_59_02"
"gohlypvkzedifrnj","2022-02-18T19:06:32.199Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","7.99135961863144","18_02_2022__20_59_02"
"ytoancmprzequbih","2022-02-18T19:06:37.764Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","6.95652173913044","18_02_2022__20_59_02"
"ahbpcuxwgvqortde","2022-02-18T19:06:41.393Z","labosfecrpuztmny","eksperiment","DATA_1","1.17326785523647","18_02_2022__20_59_02"
"hqrmftzadkogvebi","2022-02-18T19:06:44.493Z","labosfecrpuztmny","eksperiment","DATA_1","0.98964449663713","18_02_2022__20_59_02"
"ptaouiegvbxksyzm","2022-02-18T19:06:46.742Z","labosfecrpuztmny","eksperiment","DATA_1","0.848657521084659","18_02_2022__20_59_02"
"pdjxlhwbaorquice","2022-02-18T19:06:54.891Z","labosfecrpuztmny","eksperiment","DATA_1","1.89495035763852","18_02_2022__20_59_02"
"ywodgsrckzltnhmf","2022-02-18T19:06:55.258Z","labosfecrpuztmny","eksperiment","DATA_1","1.88640973630832","18_02_2022__20_59_02"
"vuabrjkqcplzohfe","2022-02-18T19:06:56.585Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","5.85071226899384","18_02_2022__20_59_02"
"paqejithlnwsdgbu","2022-02-18T19:06:55.709Z","labosfecrpuztmny","eksperiment","DATA_1","1.82655866339276","18_02_2022__20_59_02"
"oswlftiarcpgenxu","2022-02-18T19:06:59.892Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","8.91527599486521","18_02_2022__20_59_02"
"bckaidjgflehnmop","2022-02-18T19:06:59.749Z","adbkcjeilognfmhp","eksperiment","DATA_1","6.41614474599861","18_02_2022__20_59_02"
"opexfgwvnckbsluy","2022-02-18T19:07:00.853Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","3.311409137577","18_02_2022__20_59_02"
"cdhtvoanlebfzrjq","2022-02-18T19:07:02.860Z","gaitzbxocvshrdly","eksperiment","DATA_1","8.64168618266979","18_02_2022__20_59_02"
"fcxwvjsouyhldtqm","2022-02-18T19:07:07.741Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","6.25024063141684","18_02_2022__20_59_02"
"tdubikcjmnlxepvf","2022-02-18T19:07:09.921Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","6.6883503823617","18_02_2022__20_59_02"
"dkcryxqgmopfnebz","2022-02-18T19:07:10.655Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","6.27520111232496","18_02_2022__20_59_02"
"yjndvzseuiqpawrt","2022-02-18T19:07:16.476Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","2.57080388467992","18_02_2022__20_59_02"
"gyfhivokxlrzumnw","2022-02-18T19:08:17.221Z","endbhjqtsymilzwa","eksperiment","DATA_1","7.11211778029445","18_02_2022__20_59_02"
"dlkagbunmztwipfr","2022-02-18T19:08:20.143Z","endbhjqtsymilzwa","eksperiment","DATA_1","6.28539071347678","18_02_2022__20_59_02"
"jbrundhwklizegqy","2022-02-18T19:07:29.538Z","gaitzbxocvshrdly","eksperiment","DATA_1","8.13817330210773","18_02_2022__20_59_02"
"rzycwguitlhobpvm","2022-02-18T19:07:32.196Z","gaitzbxocvshrdly","eksperiment","DATA_1","7.43559718969555","18_02_2022__20_59_02"
"arwmtgbjopschvuq","2022-02-18T19:07:32.209Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","9.79491508590724","18_02_2022__20_59_02"
"jtwofykdhaqgvxbi","2022-02-18T19:07:32.760Z","fmaihbylvexsdcuq","eksperiment","DATA_1","4.30954825462012","18_02_2022__20_59_02"
"nabuytrcigmdlwef","2022-02-18T19:07:34.597Z","gaitzbxocvshrdly","eksperiment","DATA_1","6.72131147540984","18_02_2022__20_59_02"
"cbdewrmzjouvlsni","2022-02-18T19:07:33.728Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","9.12739596782203","18_02_2022__20_59_02"
"cghaxedrfubtjpwl","2022-02-18T19:07:36.617Z","gaitzbxocvshrdly","eksperiment","DATA_1","5.79625292740047","18_02_2022__20_59_02"
"xmunosefhlkqzdcj","2022-02-18T19:07:38.757Z","gaitzbxocvshrdly","eksperiment","DATA_1","4.92974238875878","18_02_2022__20_59_02"
"choeirmwnpguzyqb","2022-02-18T19:07:41.657Z","gaitzbxocvshrdly","eksperiment","DATA_1","3.9344262295082","18_02_2022__20_59_02"
"vdlctkpjfyshxbqa","2022-02-18T19:07:43.458Z","gaitzbxocvshrdly","eksperiment","DATA_1","3.23185011709602","18_02_2022__20_59_02"
"pclobdtzsviywnem","2022-02-18T19:07:45.473Z","gaitzbxocvshrdly","eksperiment","DATA_1","2.63466042154567","18_02_2022__20_59_02"
"lfktegqvmusxpjbo","2022-02-18T19:07:45.218Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","5.43273549794661","18_02_2022__20_59_02"
"yzvdxarpskbonhql","2022-02-18T19:07:47.193Z","gaitzbxocvshrdly","eksperiment","DATA_1","1.31147540983607","18_02_2022__20_59_02"
"ackrejgqlinmtvdb","2022-02-18T19:07:46.700Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","4.82289527720739","18_02_2022__20_59_02"
"maqyzskpnuhwtfjx","2022-02-18T19:07:46.564Z","labosfecrpuztmny","eksperiment","DATA_1","1.82228835272766","18_02_2022__20_59_02"
"gdwstpmcjzlrqybe","2022-02-18T19:07:49.347Z","gaitzbxocvshrdly","eksperiment","DATA_1","0.784543325526932","18_02_2022__20_59_02"
"xhpfgauynelrboqc","2022-02-18T19:07:51.315Z","gaitzbxocvshrdly","eksperiment","DATA_1","0","18_02_2022__20_59_02"
"rgabkqcwxontdijp","2022-02-18T19:07:49.106Z","labosfecrpuztmny","eksperiment","DATA_1","2.94971709191844","18_02_2022__20_59_02"
"qbasndrtmcovufwk","2022-02-18T19:07:52.847Z","bacdgehfjkilnmpo","eksperiment","DATA_1","1.78369652945924","18_02_2022__20_59_02"
"xgdvapqufnseobcr","2022-02-18T19:08:00.080Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","3.04767710472279","18_02_2022__20_59_02"
"ywlbvjrskgczhtqm","2022-02-18T19:08:03.489Z","hptaykbxgofzuien","eksperiment","DATA_1","2.20496775184275","18_02_2022__20_59_02"
"mdczojsihfvawpqn","2022-02-18T19:08:05.692Z","gaitzbxocvshrdly","eksperiment","DATA_1","3.17330210772834","18_02_2022__20_59_02"
"jnxtrglvpqfahszk","2022-02-18T19:08:05.202Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","4.26543249486653","18_02_2022__20_59_02"
"fdlvmqicpjrkoste","2022-02-18T19:08:04.422Z","labosfecrpuztmny","eksperiment","DATA_1","3.28707163446141","18_02_2022__20_59_02"
"dycbhateiwlofgkr","2022-02-18T19:08:07.266Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","4.16003593429158","18_02_2022__20_59_02"
"hiyvlaqxutmpbfsc","2022-02-18T19:08:11.427Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","5.546875","18_02_2022__20_59_02"
"naobjuipfkwcgrqm","2022-02-18T19:08:20.421Z","gaitzbxocvshrdly","eksperiment","DATA_1","5","18_02_2022__20_59_02"
"kvhrcfuwdepqtnzo","2022-02-18T19:08:21.130Z","gaitzbxocvshrdly","eksperiment","DATA_1","5.09367681498829","18_02_2022__20_59_02"
"dorutipjclnmqvkf","2022-02-18T19:08:23.606Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","9.47368421052632","18_02_2022__20_59_02"
"gcslqktbvrpjdezy","2022-02-18T19:08:24.360Z","cdfzjubmvhynkola","eksperiment","DATA_1","5.88578975644699","18_02_2022__20_59_02"
"cdabfeghmpionkjl","2022-02-18T19:08:25.076Z","adbkcjeilognfmhp","eksperiment","DATA_1","7.59220598469033","18_02_2022__20_59_02"
"rcwptdvlhomabkex","2022-02-18T19:08:31.017Z","hptaykbxgofzuien","eksperiment","DATA_1","0.542460073710074","18_02_2022__20_59_02"
"agnyeiqmrswuobtc","2022-02-18T19:08:33.408Z","gaitzbxocvshrdly","eksperiment","DATA_1","2.3536299765808","18_02_2022__20_59_02"
"txsgdnkcwfozepvm","2022-02-18T19:08:32.419Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","4.96412255437481","18_02_2022__20_59_02"
"cvbuoxiraeshzymd","2022-02-18T19:08:33.183Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","1.28160292607803","18_02_2022__20_59_02"
"abxovtmijwfzsyhq","2022-02-18T19:08:34.343Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","0.699614890885751","18_02_2022__20_59_02"
"yoixhlqwzabgcfdk","2022-02-18T19:08:35.888Z","gaitzbxocvshrdly","eksperiment","DATA_1","1.59250585480094","18_02_2022__20_59_02"
"fhbriqpzgxyckdej","2022-02-18T19:08:36.710Z","gaitzbxocvshrdly","eksperiment","DATA_1","1.10070257611241","18_02_2022__20_59_02"
"ogxktylezwfpdhaq","2022-02-18T19:08:35.722Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","0.585752783851121","18_02_2022__20_59_02"
"xstikqjaerblfuwv","2022-02-18T19:08:36.715Z","adbkcjeilognfmhp","eksperiment","DATA_1","0.264439805149617","18_02_2022__20_59_02"
"efysgzrhacbdoqmt","2022-02-18T19:08:38.218Z","qtbcgdrfsewahulj","eksperiment","DATA_1","1.86348408710218","18_02_2022__20_59_02"
"agbfhpenvxijltor","2022-02-18T19:08:36.120Z","labosfecrpuztmny","eksperiment","DATA_1","2.79164887370556","18_02_2022__20_59_02"
"yfemhgcsxzdbaijt","2022-02-18T19:08:37.622Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","0","18_02_2022__20_59_02"
"awhbktlgcndyfpis","2022-02-18T19:08:41.181Z","fynegbqitazohkwm","eksperiment","DATA_1","2.29551451187335","18_02_2022__20_59_02"
"aefdbcghikljomnp","2022-02-18T19:08:38.097Z","adbkcjeilognfmhp","eksperiment","DATA_1","0","18_02_2022__20_59_02"
"ypzrdabnqcfxhuel","2022-02-18T19:08:39.689Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","2.49163879598662","18_02_2022__20_59_02"
"dhnqucvzmswrjeix","2022-02-18T19:08:40.505Z","cdfzjubmvhynkola","eksperiment","DATA_1","1.91290592168099","18_02_2022__20_59_02"
"fedclbwirzasmkxj","2022-02-18T19:08:40.492Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","1.18729096989967","18_02_2022__20_59_02"
"xrgatojvyqbimcke","2022-02-18T19:08:41.262Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","2.96206177376105","18_02_2022__20_59_02"
"lzocfijphakmberx","2022-02-18T19:08:42.997Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","2.85082927798193","18_02_2022__20_59_02"
"awzoeqslkiupxtbc","2022-02-18T19:08:44.206Z","odrvxgtmcuwlejny","eksperiment","DATA_1","1.55336118496012","18_02_2022__20_59_02"
"abjzslfgtxvncidh","2022-02-18T19:09:47.115Z","endbhjqtsymilzwa","eksperiment","DATA_1","1.89127972819932","18_02_2022__20_59_02"
"dkfgvqaolujbzicy","2022-02-18T19:09:48.056Z","endbhjqtsymilzwa","eksperiment","DATA_1","1.49490373725934","18_02_2022__20_59_02"
"zkdvbeunpjaotics","2022-02-18T19:08:52.375Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","0.00641848523748395","18_02_2022__20_59_02"
"cbavotfepuwdhlny","2022-02-18T19:08:52.173Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","0.142140468227425","18_02_2022__20_59_02"
"bancwgsuoteyxdpi","2022-02-18T19:08:53.563Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","4.29847920944559","18_02_2022__20_59_02"
"jduriqcpolbvxsty","2022-02-18T19:08:54.390Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","3.8111203798768","18_02_2022__20_59_02"
"hcfrmdkvegyjzlni","2022-02-18T19:08:58.995Z","ozehytcbwnxiqsga","eksperiment","DATA_1","3.88530193695405","18_02_2022__20_59_02"
"yhvcfrpzdewtisqk","2022-02-18T19:08:58.370Z","labosfecrpuztmny","eksperiment","DATA_1","2.74467545638945","18_02_2022__20_59_02"
"wsauqgvkofhcjnpm","2022-02-18T19:08:59.535Z","labosfecrpuztmny","eksperiment","DATA_1","2.54824116579481","18_02_2022__20_59_02"
"eziprkgctmfsjovd","2022-02-18T19:09:02.847Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","2.78346380903491","18_02_2022__20_59_02"
"evkdqjhnxcgpbaim","2022-02-18T19:09:10.502Z","ozehytcbwnxiqsga","eksperiment","DATA_1","5.09304975313331","18_02_2022__20_59_02"
"bvglmrqxaypeduki","2022-02-18T19:09:13.479Z","cdfzjubmvhynkola","eksperiment","DATA_1","0.878850286532951","18_02_2022__20_59_02"
"nhrfzabkqxpodive","2022-02-18T19:09:12.754Z","labosfecrpuztmny","eksperiment","DATA_1","2.09565495889826","18_02_2022__20_59_02"
"ixondtwecjvkmbup","2022-02-18T19:09:14.645Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","6.33081736021452","18_02_2022__20_59_02"
"nwrxphseujakvfmi","2022-02-18T19:09:15.180Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","6.6247889562022","18_02_2022__20_59_02"
"usdzycokbhriwnqe","2022-02-18T19:09:22.625Z","ozehytcbwnxiqsga","eksperiment","DATA_1","7.78579567033802","18_02_2022__20_59_02"
"edjilnumkfvqtryw","2022-02-18T19:09:29.576Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","5.38534114609197","18_02_2022__20_59_02"
"thujiovmyxlwbnda","2022-02-18T19:09:37.994Z","alpjhrzgomxfnbuq","eksperiment","DATA_1","1.56432355651106","18_02_2022__20_59_02"
"edljfikbocanhgpm","2022-02-18T19:09:43.115Z","bacdgehfjkilnmpo","eksperiment","DATA_1","0.589184826472962","18_02_2022__20_59_02"
"ctbqjewivryoskpa","2022-02-18T19:09:44.859Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","5.56013506803059","18_02_2022__20_59_02"
"ehdpylmcxjvtfrba","2022-02-18T19:09:45.994Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","5.44095739398153","18_02_2022__20_59_02"
"lfnxekdqzhyvmpto","2022-02-18T19:09:47.301Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","6.05261197735624","18_02_2022__20_59_02"
"acxbntrejkvgzuqd","2022-02-18T19:09:51.531Z","ozehytcbwnxiqsga","eksperiment","DATA_1","9.88606152677554","18_02_2022__20_59_02"
"czauyqrxvsbtdwgf","2022-02-18T19:09:56.296Z","adbkcjeilognfmhp","eksperiment","DATA_1","3.40988169798191","18_02_2022__20_59_02"
"ayonhumxbewfckzi","2022-02-18T19:09:58.468Z","gaitzbxocvshrdly","eksperiment","DATA_1","0.620608899297424","18_02_2022__20_59_02"
"cvxutsqwdrazbfyh","2022-02-18T19:09:57.845Z","adbkcjeilognfmhp","eksperiment","DATA_1","2.79053583855254","18_02_2022__20_59_02"
"imqwhtzvgfekosdl","2022-02-18T19:09:57.915Z","cdfzjubmvhynkola","eksperiment","DATA_1","0.732524474689589","18_02_2022__20_59_02"
"cbopnigaxdveufhy","2022-02-18T19:10:01.981Z","labosfecrpuztmny","eksperiment","DATA_1","1.91623518735988","18_02_2022__20_59_02"
"hyaolvsjiwnfgkzb","2022-02-18T19:10:04.345Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","1.0783055198973","18_02_2022__20_59_02"
"ezdubyaigxvtjfpm","2022-02-18T19:10:07.265Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","4.19344026219088","18_02_2022__20_59_02"
"awzjnqsublyhmdpc","2022-02-18T19:10:07.832Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","4.05849637501241","18_02_2022__20_59_02"
"bdlrkvgtampsuehn","2022-02-18T19:10:08.232Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","3.98698977058298","18_02_2022__20_59_02"
"ayrcobxsjdkwtupi","2022-02-18T19:10:10.045Z","gaitzbxocvshrdly","eksperiment","DATA_1","3.85245901639344","18_02_2022__20_59_02"
"qgwcrjdhvbaipfen","2022-02-18T19:10:11.045Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","0.0889534137577002","18_02_2022__20_59_02"
"dpwbcnqjartxzlue","2022-02-18T19:10:12.736Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","0.6438127090301","18_02_2022__20_59_02"
"ciojgvyhubmwxdfs","2022-02-18T19:10:22.130Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","2.52181724845996","18_02_2022__20_59_02"
"gstdonrpmjuzihaw","2022-02-18T19:10:24.601Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","3.41493693514748","18_02_2022__20_59_02"
"edoxunlmwyhqpktg","2022-02-18T19:10:24.532Z","labosfecrpuztmny","eksperiment","DATA_1","1.89495035763852","18_02_2022__20_59_02"
"kdcfthiwogqbrxlj","2022-02-18T19:10:25.616Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","3.35137550898798","18_02_2022__20_59_02"
"mdkatqgxifsyjznr","2022-02-18T19:10:25.415Z","labosfecrpuztmny","eksperiment","DATA_1","1.81801804206256","18_02_2022__20_59_02"
"zktobhvswcnqpmgd","2022-02-18T19:10:31.189Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","3.14480087396961","18_02_2022__20_59_02"
"zbphkqaerwvxgdjc","2022-02-18T19:10:31.673Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","3.09712980434999","18_02_2022__20_59_02"
"nfhkqlytwrcobpvm","2022-02-18T19:10:33.459Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","2.23803259753593","18_02_2022__20_59_02"
"ghoqzdlstvjpcnmi","2022-02-18T19:10:38.725Z","ozehytcbwnxiqsga","eksperiment","DATA_1","10","18_02_2022__20_59_02"
"jdakqbrecfhzosxm","2022-02-18T19:10:39.192Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","0.602006688963211","18_02_2022__20_59_02"
"lhnuwaofbikxrycg","2022-02-18T19:10:41.382Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","0.476588628762542","18_02_2022__20_59_02"
"yeizdabfqgvjuswh","2022-02-18T19:10:42.440Z","adbkcjeilognfmhp","eksperiment","DATA_1","1.3848295059151","18_02_2022__20_59_02"
"ovegcnbsrqfazplu","2022-02-18T19:10:42.793Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","0.434782608695652","18_02_2022__20_59_02"
"adpbjemsgycfihkl","2022-02-18T19:10:44.391Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","0.342809364548495","18_02_2022__20_59_02"
"pstmzabvjiuhwlox","2022-02-18T19:10:46.590Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","0.706033376123235","18_02_2022__20_59_02"
"kqcdbxpastfzlyjg","2022-02-18T19:10:48.599Z","gaitzbxocvshrdly","eksperiment","DATA_1","4.27400468384075","18_02_2022__20_59_02"
"pdqcobhtkjreasvi","2022-02-18T19:10:53.598Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","2.11017710472279","18_02_2022__20_59_02"
"fstcypaezwjnvxml","2022-02-18T19:10:57.023Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","2.66809017777336","18_02_2022__20_59_02"
"apdlbcneuzsvmtqy","2022-02-18T19:10:57.732Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","2.61234978647333","18_02_2022__20_59_02"
"iaszqykrtjlcvuxw","2022-02-18T19:11:06.479Z","adbkcjeilognfmhp","eksperiment","DATA_1","0.424495476687543","18_02_2022__20_59_02"
"vwjghsozmbxycaer","2022-02-18T19:11:09.779Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","0","18_02_2022__20_59_02"
"jprmaqyhfseblnct","2022-02-18T19:11:09.485Z","labosfecrpuztmny","eksperiment","DATA_1","1.62585406213302","18_02_2022__20_59_02"
"wafsrxbiujplocqh","2022-02-18T19:11:15.667Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","2.53289800377396","18_02_2022__20_59_02"
"fpahxjwbzkyminro","2022-02-18T19:11:16.634Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","2.13576323368756","18_02_2022__20_59_02"
"ngxveylmutoqhrkd","2022-02-18T19:11:18.696Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","2.04135651950719","18_02_2022__20_59_02"
"jhbnivoqdykgzxta","2022-02-18T19:11:20.137Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","0.449293966623877","18_02_2022__20_59_02"
"aydzbqrsctvwefux","2022-02-18T19:11:29.148Z","adbkcjeilognfmhp","eksperiment","DATA_1","0","18_02_2022__20_59_02"
"onigqwzhbepxvmfl","2022-02-18T19:11:33.524Z","odrvxgtmcuwlejny","eksperiment","DATA_1","0","18_02_2022__20_59_02"
"dmiscpelunobktjx","2022-02-18T19:11:48.021Z","hptaykbxgofzuien","eksperiment","DATA_1","0.0604652948402948","18_02_2022__20_59_02"
"zfdpkiysbcvhrgqt","2022-02-18T19:11:51.462Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","1.49692378095287","18_02_2022__20_59_02"
"rjlfyzghtcsekbqx","2022-02-18T19:11:54.229Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","1.10642192505212","18_02_2022__20_59_02"
"paohmyzwbklgvtsc","2022-02-18T19:11:55.356Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","1.82234199420349","18_02_2022__20_59_02"
"apevnlhbskicgjdr","2022-02-18T19:12:01.862Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","0.848644353957692","18_02_2022__20_59_02"
"eotsbfdjvacpyrlh","2022-02-18T19:12:01.551Z","labosfecrpuztmny","eksperiment","DATA_1","1.55325878082631","18_02_2022__20_59_02"
"tsjvzbwerkuqayhx","2022-02-18T19:12:03.762Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","1.13896374637718","18_02_2022__20_59_02"
"zhaxyuivjglpmned","2022-02-18T19:12:07.209Z","labosfecrpuztmny","eksperiment","DATA_1","1.54905519376535","18_02_2022__20_59_02"
"labkpejqcdhouwfr","2022-02-18T19:12:08.602Z","ozehytcbwnxiqsga","eksperiment","DATA_1","7.12869113178883","18_02_2022__20_59_02"
"oleqxdkptzuhcjgb","2022-02-18T19:12:07.792Z","labosfecrpuztmny","eksperiment","DATA_1","1.54051457243514","18_02_2022__20_59_02"
"xylavbornhzcukps","2022-02-18T19:12:08.409Z","labosfecrpuztmny","eksperiment","DATA_1","1.49347443151489","18_02_2022__20_59_02"
"poxdqzmybtlgsfea","2022-02-18T19:12:10.905Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","0.578508292779819","18_02_2022__20_59_02"
"nsxaoczprkfdvlih","2022-02-18T19:12:18.451Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","0.157252888318357","18_02_2022__20_59_02"
"pchmlsdebwvtrgqy","2022-02-18T19:12:23.586Z","gaitzbxocvshrdly","eksperiment","DATA_1","2.83372365339578","18_02_2022__20_59_02"
"dckobxunfiypztgw","2022-02-18T19:12:23.962Z","gaitzbxocvshrdly","eksperiment","DATA_1","2.99765807962529","18_02_2022__20_59_02"
"cbdahegflnmopjik","2022-02-18T19:12:22.652Z","adbkcjeilognfmhp","eksperiment","DATA_1","0.918580375782881","18_02_2022__20_59_02"
"rugofjmyklavtxbd","2022-02-18T19:12:24.392Z","gaitzbxocvshrdly","eksperiment","DATA_1","2.85714285714286","18_02_2022__20_59_02"
"ouxgspybwrdjnqck","2022-02-18T19:12:26.692Z","labosfecrpuztmny","eksperiment","DATA_1","1.20736361695313","18_02_2022__20_59_02"
"arbjxcldtgwuenqv","2022-02-18T19:12:28.378Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","0.334448160535117","18_02_2022__20_59_02"
"whudrxavzfqpikos","2022-02-18T19:12:29.963Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","0.359531772575251","18_02_2022__20_59_02"
"hraobckmvxtpldjz","2022-02-18T19:12:31.325Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","1.00334448160535","18_02_2022__20_59_02"
"gkfzsemywdujixcq","2022-02-18T19:12:32.711Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","1.46321070234114","18_02_2022__20_59_02"
"lvxmuqcrikbawyeo","2022-02-18T19:12:33.574Z","ozehytcbwnxiqsga","eksperiment","DATA_1","9.77212305355108","18_02_2022__20_59_02"
"qfzxgonuykwdvhib","2022-02-18T19:12:47.451Z","fynegbqitazohkwm","eksperiment","DATA_1","2.15919085312225","18_02_2022__20_59_02"
"dotpayxsizklbuqj","2022-02-18T19:12:47.455Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","2.23755133470226","18_02_2022__20_59_02"
"rcidtwejnaxmbpul","2022-02-18T19:12:48.838Z","ozehytcbwnxiqsga","eksperiment","DATA_1","10","18_02_2022__20_59_02"
"ahoiqgbtuzjpdmew","2022-02-18T19:12:56.091Z","labosfecrpuztmny","eksperiment","DATA_1","1.10060585032561","18_02_2022__20_59_02"
"hglztojuxpyemrin","2022-02-18T19:13:01.053Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","0.0288831835686778","18_02_2022__20_59_02"
"wmkhliyurzosxgqc","2022-02-18T19:13:08.121Z","labosfecrpuztmny","eksperiment","DATA_1","3.64150741966478","18_02_2022__20_59_02"
"cnijbdezvsphmloa","2022-02-18T19:13:12.654Z","labosfecrpuztmny","eksperiment","DATA_1","4.73891053699157","18_02_2022__20_59_02"
"cobalimkdfnegjhp","2022-02-18T19:13:15.605Z","adbkcjeilognfmhp","eksperiment","DATA_1","1.63535142658316","18_02_2022__20_59_02"
"uxabvhonecfyzmrl","2022-02-18T19:13:20.437Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","2.45732802874743","18_02_2022__20_59_02"
"jabkcpzstivfwdyl","2022-02-18T19:13:26.254Z","labosfecrpuztmny","eksperiment","DATA_1","4.38881178605744","18_02_2022__20_59_02"
"eatzndqfvbimxphj","2022-02-18T19:13:27.972Z","labosfecrpuztmny","eksperiment","DATA_1","3.92761823422654","18_02_2022__20_59_02"
"noabfilyghzdvrcu","2022-02-18T19:13:29.437Z","labosfecrpuztmny","eksperiment","DATA_1","3.47923561439095","18_02_2022__20_59_02"
"mfdaoqsbczepxijr","2022-02-18T19:13:32.961Z","odrvxgtmcuwlejny","eksperiment","DATA_1","0.839346752753513","18_02_2022__20_59_02"
"cbfxptonkirjuqye","2022-02-18T19:13:35.119Z","labosfecrpuztmny","eksperiment","DATA_1","3.18878776555994","18_02_2022__20_59_02"
"jikbalndcmefhgop","2022-02-18T19:13:39.068Z","adbkcjeilognfmhp","eksperiment","DATA_1","0.633263743910926","18_02_2022__20_59_02"
"fwglsrehpbzncjqk","2022-02-18T19:13:46.649Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","2.72330595482546","18_02_2022__20_59_02"
"gdatxyzvminpeshk","2022-02-18T19:13:59.797Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","1.86562717250968","18_02_2022__20_59_02"
"jdulbkqanceitzwo","2022-02-18T19:14:00.732Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","2.11987287714768","18_02_2022__20_59_02"
"adhfeuoplxsmnvyk","2022-02-18T19:14:07.238Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","4.98808223259509","18_02_2022__20_59_02"
"akfijlgemnbchpod","2022-02-18T19:14:10.545Z","bacdgehfjkilnmpo","eksperiment","DATA_1","0.0968523002421308","18_02_2022__20_59_02"
"esvghafxrwlntkbc","2022-02-18T19:14:10.469Z","labosfecrpuztmny","eksperiment","DATA_1","2.514078680474","18_02_2022__20_59_02"
"hakybgmpvcozilnt","2022-02-18T19:14:12.935Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","1.47993311036789","18_02_2022__20_59_02"
"dilahyxtmnuwcvfz","2022-02-18T19:14:13.709Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","2.02194558521561","18_02_2022__20_59_02"
"zkbnmfxawgreidoy","2022-02-18T19:14:16.698Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","0.518394648829431","18_02_2022__20_59_02"
"gscqztkfvxiodbhm","2022-02-18T19:14:27.768Z","labosfecrpuztmny","eksperiment","DATA_1","0.609586847443152","18_02_2022__20_59_02"
"qecbzyfhrtsuvawx","2022-02-18T19:14:29.840Z","adbkcjeilognfmhp","eksperiment","DATA_1","0","18_02_2022__20_59_02"
"suwdgqzkcvjbnpif","2022-02-18T19:14:30.855Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","0","18_02_2022__20_59_02"
"vwdalqrofuegixhb","2022-02-18T19:14:31.527Z","hptaykbxgofzuien","eksperiment","DATA_1","0","18_02_2022__20_59_02"
"vzuebqjomwsxitpy","2022-02-18T19:14:32.921Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","0.455585498550872","18_02_2022__20_59_02"
"hkfabtigxpcwledj","2022-02-18T19:14:32.713Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","3.03356837819049","18_02_2022__20_59_02"
"vjuzdotcpxiglfeb","2022-02-18T19:14:35.100Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","4.13966247433265","18_02_2022__20_59_02"
"aefihlrgwbdxjkcq","2022-02-18T19:15:35.562Z","endbhjqtsymilzwa","eksperiment","DATA_1","0.679501698754247","18_02_2022__20_59_02"
"cfuxnrgphsjewaio","2022-02-18T19:14:36.787Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","2.51828798767967","18_02_2022__20_59_02"
"yzqevxlkjcdwursi","2022-02-18T19:14:36.790Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","0","18_02_2022__20_59_02"
"sgvzncpqiratbyfe","2022-02-18T19:15:37.096Z","endbhjqtsymilzwa","eksperiment","DATA_1","0","18_02_2022__20_59_02"
"khgfizwraxoctduy","2022-02-18T19:14:52.515Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","0.577663671373556","18_02_2022__20_59_02"
"badcflkjhegimnpo","2022-02-18T19:14:54.802Z","adbkcjeilognfmhp","eksperiment","DATA_1","3.89700765483646","18_02_2022__20_59_02"
"abqfnghewcoxiztp","2022-02-18T19:14:56.739Z","alpjhrzgomxfnbuq","eksperiment","DATA_1","0.974451013513514","18_02_2022__20_59_02"
"fkxcwbdqzgmuhiov","2022-02-18T19:15:00.188Z","fynegbqitazohkwm","eksperiment","DATA_1","2.6429199648197","18_02_2022__20_59_02"
"wvgmqncudzlejibx","2022-02-18T19:15:07.707Z","cdfzjubmvhynkola","eksperiment","DATA_1","1.34760028653295","18_02_2022__20_59_02"
"pgdxyrfcuowbatvi","2022-02-18T19:15:11.336Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","7.06177376104876","18_02_2022__20_59_02"
"axrsnwbcydtzukvf","2022-02-18T19:15:11.886Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","6.94247194358924","18_02_2022__20_59_02"
"pzuclrxymbfdeotk","2022-02-18T19:14:57.189Z","gaitzbxocvshrdly","eksperiment","DATA_1","5.21077283372365","18_02_2022__20_59_02"
"rawntmpbdqlzefuk","2022-02-18T19:15:04.655Z","gaitzbxocvshrdly","eksperiment","DATA_1","2.65807962529274","18_02_2022__20_59_02"
"zabwjcdipeofkgrq","2022-02-18T19:15:13.036Z","gaitzbxocvshrdly","eksperiment","DATA_1","3.77049180327869","18_02_2022__20_59_02"
"aohtrsijqbukvxgp","2022-02-18T19:15:12.413Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","6.95041712185917","18_02_2022__20_59_02"
"dlcyrwznxabhuvgs","2022-02-18T19:15:13.929Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","1.52946560227793","18_02_2022__20_59_02"
"byzsowpxuvfemtra","2022-02-18T19:15:17.400Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","2.47317842070473","18_02_2022__20_59_02"
"moekqbyripuvxtcw","2022-02-18T19:15:16.614Z","labosfecrpuztmny","eksperiment","DATA_1","0.472870182555781","18_02_2022__20_59_02"
"ucfebvgwdxthqair","2022-02-18T19:15:21.113Z","adbkcjeilognfmhp","eksperiment","DATA_1","1.72581767571329","18_02_2022__20_59_02"
"ncwuplrijbsofmhg","2022-02-18T19:15:28.937Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","5.32177971993247","18_02_2022__20_59_02"
"khdqcbfsxwzepyai","2022-02-18T19:15:36.783Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","2.23915554414784","18_02_2022__20_59_02"
"frbdzjulaeixscpn","2022-02-18T19:15:46.185Z","fynegbqitazohkwm","eksperiment","DATA_1","2.86279683377309","18_02_2022__20_59_02"
"wazqxpblikcuntoy","2022-02-18T19:16:00.100Z","gaitzbxocvshrdly","eksperiment","DATA_1","3.37236533957845","18_02_2022__20_59_02"
"msxatgrkhnyiodqz","2022-02-18T19:15:59.169Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","2.74255646817248","18_02_2022__20_59_02"
"sgabwuxocdmzevrq","2022-02-18T19:16:00.059Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","4.73626796714579","18_02_2022__20_59_02"
"crskejqzpovwihum","2022-02-18T19:16:02.559Z","gaitzbxocvshrdly","eksperiment","DATA_1","4.32084309133489","18_02_2022__20_59_02"
"iuejdkclyxprvqgt","2022-02-18T19:16:01.569Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","6.6247889562022","18_02_2022__20_59_02"
"cjvixrtgobqkyfsh","2022-02-18T19:16:03.145Z","labosfecrpuztmny","eksperiment","DATA_1","0.319138998612149","18_02_2022__20_59_02"
"idctqbkzrevsphxf","2022-02-18T19:16:11.787Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","3.13735241273101","18_02_2022__20_59_02"
"fdvtrkwujmscpqyl","2022-02-18T19:16:11.427Z","labosfecrpuztmny","eksperiment","DATA_1","0.396071314188107","18_02_2022__20_59_02"
"hjrmaqbgskfczxop","2022-02-18T19:16:12.096Z","labosfecrpuztmny","eksperiment","DATA_1","0.42162645457457","18_02_2022__20_59_02"
"jciabdhkngolefpm","2022-02-18T19:16:13.500Z","adbkcjeilognfmhp","eksperiment","DATA_1","4.63465553235908","18_02_2022__20_59_02"
"ynxgmcsraidkqpvb","2022-02-18T19:16:12.760Z","labosfecrpuztmny","eksperiment","DATA_1","0.199637023593466","18_02_2022__20_59_02"
"rjzsqtaycbdvuwil","2022-02-18T19:16:14.369Z","adbkcjeilognfmhp","eksperiment","DATA_1","5.1356993736952","18_02_2022__20_59_02"
"dowmgrezlxftivhu","2022-02-18T19:16:13.827Z","labosfecrpuztmny","eksperiment","DATA_1","0.13124532934771","18_02_2022__20_59_02"
"zculdiwtgorpevkh","2022-02-18T19:16:14.560Z","labosfecrpuztmny","eksperiment","DATA_1","0.139785950677912","18_02_2022__20_59_02"
"vkjpnwclfmrihydx","2022-02-18T19:16:15.695Z","labosfecrpuztmny","eksperiment","DATA_1","0.058650048040995","18_02_2022__20_59_02"
"klqpugziwxamtysf","2022-02-18T19:16:24.659Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","7.04588340450889","18_02_2022__20_59_02"
"psdiabugmtrclqje","2022-02-18T19:16:26.307Z","adbkcjeilognfmhp","eksperiment","DATA_1","2.87404314544189","18_02_2022__20_59_02"
"ikbjlancopmdfegh","2022-02-18T19:16:26.821Z","adbkcjeilognfmhp","eksperiment","DATA_1","2.03201113430759","18_02_2022__20_59_02"
"apgrmitdbxuqlekw","2022-02-18T19:16:28.421Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","3.28413757700205","18_02_2022__20_59_02"
"qaslbtgczpwdneoh","2022-02-18T19:16:29.018Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","2.71295880390144","18_02_2022__20_59_02"
"nvtphjmsxgaelokw","2022-02-18T19:16:29.922Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","1.61070649383984","18_02_2022__20_59_02"
"isvgroyuamewflnb","2022-02-18T19:16:31.867Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","6.14000893832555","18_02_2022__20_59_02"
"nhabeydzloptwmgu","2022-02-18T19:16:33.033Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","0.388318356867779","18_02_2022__20_59_02"
"dgesanjrhkqciuxp","2022-02-18T19:16:32.750Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","5.59986095938028","18_02_2022__20_59_02"
"dfrtkobjwyvslecx","2022-02-18T19:16:36.534Z","gaitzbxocvshrdly","eksperiment","DATA_1","1.90866510538642","18_02_2022__20_59_02"
"oyvtxfzdwusenqrg","2022-02-18T19:16:38.995Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","1.75725835155336","18_02_2022__20_59_02"
"payzxwqjrsdkgtvu","2022-02-18T19:16:41.007Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","1.43184013830274","18_02_2022__20_59_02"
"mtobkhdzqwylcjvp","2022-02-18T19:16:47.848Z","fynegbqitazohkwm","eksperiment","DATA_1","2.70888302550572","18_02_2022__20_59_02"
"fyopsamlkbhzxunt","2022-02-18T19:16:46.255Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","2.83929029774127","18_02_2022__20_59_02"
"bcxkfqeuptovgsyi","2022-02-18T19:16:47.679Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","5.51246399841097","18_02_2022__20_59_02"
"aqutpvyshjrmbckd","2022-02-18T19:16:49.200Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","4.04260601847254","18_02_2022__20_59_02"
"dfxeryqkhubjaimc","2022-02-18T19:16:58.409Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","2.96988280862052","18_02_2022__20_59_02"
"paitbcydezukflog","2022-02-18T19:17:05.684Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","0.877926421404682","18_02_2022__20_59_02"
"cazyhiswpxvkujde","2022-02-18T19:17:11.849Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","0.943712818426806","18_02_2022__20_59_02"
"ayduomrngwpjtvzl","2022-02-18T19:17:13.041Z","labosfecrpuztmny","eksperiment","DATA_1","0","18_02_2022__20_59_02"
"qanlhicuwrtdjbvz","2022-02-18T19:17:24.803Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","2.64213295687885","18_02_2022__20_59_02"
"gpzosdnkirtqxajh","2022-02-18T19:17:26.955Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","4.4160293971596","18_02_2022__20_59_02"
"rnadkejhucimlpyb","2022-02-18T19:17:27.622Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","4.64643956698778","18_02_2022__20_59_02"
"fxjirltvwbkqnuac","2022-02-18T19:17:34.762Z","adbkcjeilognfmhp","eksperiment","DATA_1","0.361864996520529","18_02_2022__20_59_02"
"awgchbfrlsouevpi","2022-02-18T19:17:35.880Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","2.15092402464066","18_02_2022__20_59_02"
"ubdypfkaezscixmq","2022-02-18T19:17:40.145Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","0.836120401337793","18_02_2022__20_59_02"
"ptuwrdznlcbgsxvq","2022-02-18T19:17:41.022Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","0.125418060200669","18_02_2022__20_59_02"
"szliogwecudvtkqb","2022-02-18T19:17:40.855Z","labosfecrpuztmny","eksperiment","DATA_1","0.549735774527597","18_02_2022__20_59_02"
"zbwqvtgpoijcenua","2022-02-18T19:17:47.246Z","labosfecrpuztmny","eksperiment","DATA_1","1.0493621223444","18_02_2022__20_59_02"
"udvhyxpcrfjbgzwe","2022-02-18T19:17:53.062Z","gaitzbxocvshrdly","eksperiment","DATA_1","3.13817330210773","18_02_2022__20_59_02"
"lbypcquojdkvznge","2022-02-18T19:17:57.228Z","gaitzbxocvshrdly","eksperiment","DATA_1","4.2271662763466","18_02_2022__20_59_02"
"fpxgtzyvhbqsenlu","2022-02-18T19:17:57.829Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","3.1890984898561","18_02_2022__20_59_02"
"klaghdvurixsqowt","2022-02-18T19:18:07.150Z","adbkcjeilognfmhp","eksperiment","DATA_1","3.82741823242867","18_02_2022__20_59_02"
"bdsfhcnmvugqjexr","2022-02-18T19:18:06.720Z","labosfecrpuztmny","eksperiment","DATA_1","0.498558770150529","18_02_2022__20_59_02"
"mswcpeyqgftjubzr","2022-02-18T19:18:08.986Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","3.65984342915811","18_02_2022__20_59_02"
"osnibxakzrydwuje","2022-02-18T19:18:08.950Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","3.38315622206773","18_02_2022__20_59_02"
"awdrhobilkyqfgps","2022-02-18T19:18:25.514Z","ozehytcbwnxiqsga","eksperiment","DATA_1","4.31820879225218","18_02_2022__20_59_02"
"aikfqvbctzndegow","2022-02-18T19:18:30.385Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","3.01767802165061","18_02_2022__20_59_02"
"cnqpwhfoxdyvalmb","2022-02-18T19:18:30.929Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","5.36255133470226","18_02_2022__20_59_02"
"fklremysapxdgbzo","2022-02-18T19:18:33.653Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","3.29376283367557","18_02_2022__20_59_02"
"hxzkwsybacprmetd","2022-02-18T19:18:35.371Z","ozehytcbwnxiqsga","eksperiment","DATA_1","9.89365742499051","18_02_2022__20_59_02"
"gdzwycrtxquaobvs","2022-02-18T19:18:38.844Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","2.66842934865511","18_02_2022__20_59_02"
"xtnflzmhyojqskba","2022-02-18T19:18:38.857Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","3.7886614476386","18_02_2022__20_59_02"
"naxcpgbjdytvzlse","2022-02-18T19:18:39.422Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","3.38945392710472","18_02_2022__20_59_02"
"bwzpyvanicshlrku","2022-02-18T19:18:38.870Z","labosfecrpuztmny","eksperiment","DATA_1","0.378990071527704","18_02_2022__20_59_02"
"nbfjsqygmouhdack","2022-02-18T19:18:49.342Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","1.12323491655969","18_02_2022__20_59_02"
"avbhmpdqtzwfjgil","2022-02-18T19:18:49.360Z","ozehytcbwnxiqsga","eksperiment","DATA_1","10","18_02_2022__20_59_02"
"ahsirkmqoynvzwub","2022-02-18T19:18:50.720Z","labosfecrpuztmny","eksperiment","DATA_1","0.349031173267855","18_02_2022__20_59_02"
"ciqxzsbfekgjrawh","2022-02-18T19:19:03.437Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","2.82421072895277","18_02_2022__20_59_02"
"ktyxgbemnursodjl","2022-02-18T19:19:13.824Z","ozehytcbwnxiqsga","eksperiment","DATA_1","6.25902012913027","18_02_2022__20_59_02"
"bxqrvmcitdkazwgy","2022-02-18T19:19:17.085Z","labosfecrpuztmny","eksperiment","DATA_1","0.144056261343013","18_02_2022__20_59_02"
"uartmkxlbvhfycpd","2022-02-18T19:19:31.193Z","ozehytcbwnxiqsga","eksperiment","DATA_1","3.95360567793392","18_02_2022__20_59_02"
"vzyjxudtphlgnwri","2022-02-18T19:19:34.148Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","2.0323517727679","18_02_2022__20_59_02"
"zadrsqxwhbgcvlep","2022-02-18T19:19:39.617Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","4.91786447638604","18_02_2022__20_59_02"
"dgcthmpsfznkqbue","2022-02-18T19:19:43.212Z","fynegbqitazohkwm","eksperiment","DATA_1","2.60334212840809","18_02_2022__20_59_02"
"cltmwzbrpvafsyhx","2022-02-18T19:19:40.519Z","cdfzjubmvhynkola","eksperiment","DATA_1","0.787592526265521","18_02_2022__20_59_02"
"lthpbrufmnsojcgy","2022-02-18T19:19:45.010Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","1.3992297817715","18_02_2022__20_59_02"
"cskjytelzpawoxrq","2022-02-18T19:19:48.316Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","5.53210962526059","18_02_2022__20_59_02"
"nfqekpmvzsduochr","2022-02-18T19:19:50.279Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","6.06294917864476","18_02_2022__20_59_02"
"choudxqnfzpstbew","2022-02-18T19:19:51.733Z","labosfecrpuztmny","eksperiment","DATA_1","0.126975018682609","18_02_2022__20_59_02"
"ofxanbluzcimwyqd","2022-02-18T19:19:52.100Z","labosfecrpuztmny","eksperiment","DATA_1","0.0885422226967012","18_02_2022__20_59_02"
"abcxjduefsgthkly","2022-02-18T19:19:52.600Z","labosfecrpuztmny","eksperiment","DATA_1","0.0458391160456923","18_02_2022__20_59_02"
"wlxdkcrbnzsgfojt","2022-02-18T19:20:02.423Z","gaitzbxocvshrdly","eksperiment","DATA_1","2.42388758782201","18_02_2022__20_59_02"
"eyjazuxqmwvgstor","2022-02-18T19:20:04.423Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","4.68602227080897","18_02_2022__20_59_02"
"ljmitngqakbfpszo","2022-02-18T19:20:07.842Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","7.01777464065708","18_02_2022__20_59_02"
"apcwfdboerzqygjh","2022-02-18T19:20:10.548Z","labosfecrpuztmny","eksperiment","DATA_1","2.88986601900288","18_02_2022__20_59_02"
"dzrjpnlmekvtogwf","2022-02-18T19:20:12.138Z","ozehytcbwnxiqsga","eksperiment","DATA_1","9.96961640714014","18_02_2022__20_59_02"
"jxalkobcgynirvhp","2022-02-18T19:20:11.015Z","labosfecrpuztmny","eksperiment","DATA_1","2.56105209779011","18_02_2022__20_59_02"
"cnyhmvxrqjgswfdo","2022-02-18T19:20:11.532Z","labosfecrpuztmny","eksperiment","DATA_1","2.18526475926124","18_02_2022__20_59_02"
"sceghvqxtrjkizwy","2022-02-18T19:20:12.601Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","3.99929414784394","18_02_2022__20_59_02"
"dexqypiakslmuwgr","2022-02-18T19:20:11.965Z","labosfecrpuztmny","eksperiment","DATA_1","2.52268602540835","18_02_2022__20_59_02"
"oazqgehpufsnjwrb","2022-02-18T19:20:12.764Z","labosfecrpuztmny","eksperiment","DATA_1","2.70624266040354","18_02_2022__20_59_02"
"fdxaevtuhjsqmyzc","2022-02-18T19:20:13.916Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","4.63456108829569","18_02_2022__20_59_02"
"absdenpcrlwfuvqx","2022-02-18T19:20:14.261Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","0","18_02_2022__20_59_02"
"balijcdfkegnmhop","2022-02-18T19:20:14.574Z","adbkcjeilognfmhp","eksperiment","DATA_1","0.327070285316632","18_02_2022__20_59_02"
"pabzqlvynkmtrujw","2022-02-18T19:20:19.977Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","8.08657761446022","18_02_2022__20_59_02"
"rqsbatcdfehgwivk","2022-02-18T19:20:22.217Z","qtbcgdrfsewahulj","eksperiment","DATA_1","0.515075376884422","18_02_2022__20_59_02"
"ungzhmyfwvoxqdsp","2022-02-18T19:20:21.498Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","3.25418213250623","18_02_2022__20_59_02"
"ipykfabrcndoleju","2022-02-18T19:20:26.474Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","5.69799152977413","18_02_2022__20_59_02"
"pyzgtlqhvkeabicj","2022-02-18T19:20:27.919Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","6.27520111232496","18_02_2022__20_59_02"
"kcxvorqafelintbh","2022-02-18T19:20:28.686Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","6.0924620121164","18_02_2022__20_59_02"
"apktrshqzdbfnocj","2022-02-18T19:20:45.444Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","6.73463167351129","18_02_2022__20_59_02"
"jopzlehqctmrbiaw","2022-02-18T19:20:47.346Z","labosfecrpuztmny","eksperiment","DATA_1","2.005911711327","18_02_2022__20_59_02"
"kdvurlecytpbwqmh","2022-02-18T19:20:50.098Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","2.19191270860077","18_02_2022__20_59_02"
"dqnpxvsuhblokrgm","2022-02-18T19:20:48.980Z","labosfecrpuztmny","eksperiment","DATA_1","1.58742126614711","18_02_2022__20_59_02"
"esvcimupwgbkyjot","2022-02-18T19:20:57.998Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","7.15699175687755","18_02_2022__20_59_02"
"trkpmzgoqcnyudbl","2022-02-18T19:21:04.002Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","1.15532734274711","18_02_2022__20_59_02"
"yjoszpqghbvcenmd","2022-02-18T19:21:09.434Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","4.88127319875934","18_02_2022__20_59_02"
"aiwzugqmebyctjsr","2022-02-18T19:21:14.546Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","1.84323665297741","18_02_2022__20_59_02"
"akxtqsrnzlybgmue","2022-02-18T19:21:19.120Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","5.44095739398153","18_02_2022__20_59_02"
"cepuiyvsdbknglqw","2022-02-18T19:21:19.620Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","4.74178170622703","18_02_2022__20_59_02"
"dizlocqjpvuhmfes","2022-02-18T19:21:19.940Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","4.58287814082829","18_02_2022__20_59_02"
"ferkyjzdgpiwuvsx","2022-02-18T19:21:19.344Z","labosfecrpuztmny","eksperiment","DATA_1","1.64293530479342","18_02_2022__20_59_02"
"pwosxbzmgtqnhril","2022-02-18T19:21:19.977Z","labosfecrpuztmny","eksperiment","DATA_1","1.55759581509555","18_02_2022__20_59_02"
"kcbraysdvhnqlift","2022-02-18T19:21:22.656Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","2.14370841195749","18_02_2022__20_59_02"
"pytnvofklzeghdqu","2022-02-18T19:21:23.628Z","labosfecrpuztmny","eksperiment","DATA_1","1.44650101419878","18_02_2022__20_59_02"
"defxcbrmjgiolnhp","2022-02-18T19:21:29.111Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","7.1902271560575","18_02_2022__20_59_02"
"pqsakbcvroilzemg","2022-02-18T19:21:28.422Z","labosfecrpuztmny","eksperiment","DATA_1","1.25867406853849","18_02_2022__20_59_02"
"agwpurqlihjxbokd","2022-02-18T19:21:29.844Z","labosfecrpuztmny","eksperiment","DATA_1","1.14330895697662","18_02_2022__20_59_02"
"tedfqcrihkpblxsm","2022-02-18T19:21:31.711Z","labosfecrpuztmny","eksperiment","DATA_1","1.0579027436746","18_02_2022__20_59_02"
"loiyxjnvbupsrtza","2022-02-18T19:21:32.960Z","labosfecrpuztmny","eksperiment","DATA_1","1.0365511903491","18_02_2022__20_59_02"
"khpgcaqremoyzxnt","2022-02-18T19:21:33.282Z","labosfecrpuztmny","eksperiment","DATA_1","1.01946994768869","18_02_2022__20_59_02"
"bxgstlionyqahzrf","2022-02-18T19:21:33.944Z","labosfecrpuztmny","eksperiment","DATA_1","0.959752321981424","18_02_2022__20_59_02"
"abutdohnqevfxjsp","2022-02-18T19:21:34.620Z","labosfecrpuztmny","eksperiment","DATA_1","0.925589836660617","18_02_2022__20_59_02"
"adylwnrgfovipjeh","2022-02-18T19:21:41.415Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","1.53846153846154","18_02_2022__20_59_02"
"tulxqgiabwnpjfcz","2022-02-18T19:21:45.129Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","1.96891449001887","18_02_2022__20_59_02"
"uoblsdjtemxkhyvq","2022-02-18T19:21:45.763Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","1.92918859866918","18_02_2022__20_59_02"
"zwirmvnyxcqoupjt","2022-02-18T19:21:46.210Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","6.11786240911171","18_02_2022__20_59_02"
"hfvmzapbycwrgtel","2022-02-18T19:21:58.175Z","labosfecrpuztmny","eksperiment","DATA_1","0.857198142414861","18_02_2022__20_59_02"
"pfmutxaeovjsygnb","2022-02-18T19:21:58.925Z","labosfecrpuztmny","eksperiment","DATA_1","0.801684103768549","18_02_2022__20_59_02"
"dheqcisxfwkvubzl","2022-02-18T19:22:07.535Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","3.89632107023411","18_02_2022__20_59_02"
"tabcsmpoihxzqekj","2022-02-18T19:22:10.388Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","5.31538757700205","18_02_2022__20_59_02"
"gzpiwmerjaxosfnl","2022-02-18T19:22:16.310Z","labosfecrpuztmny","eksperiment","DATA_1","0.647952919824917","18_02_2022__20_59_02"
"ydelzwikncsbafox","2022-02-18T19:22:29.458Z","labosfecrpuztmny","eksperiment","DATA_1","0.528384221202093","18_02_2022__20_59_02"
"wrmknehxscvfybqo","2022-02-18T19:22:30.057Z","labosfecrpuztmny","eksperiment","DATA_1","0.519843599871891","18_02_2022__20_59_02"
"almdsxwubiqyhocf","2022-02-18T19:22:34.284Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","6.22073578595318","18_02_2022__20_59_02"
"idxgwfpoahecmrby","2022-02-18T19:22:43.654Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","0.800973284338067","18_02_2022__20_59_02"
"dewqymvhctrsoijk","2022-02-18T19:22:44.038Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","0.76124739298838","18_02_2022__20_59_02"
"gdtpkoybjwqfviac","2022-02-18T19:22:44.438Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","0.753302214718443","18_02_2022__20_59_02"
"myeowhuvrgciptfj","2022-02-18T19:22:50.389Z","labosfecrpuztmny","eksperiment","DATA_1","0.511302978541689","18_02_2022__20_59_02"
"dfwiqugvzbytsoxc","2022-02-18T19:22:51.073Z","labosfecrpuztmny","eksperiment","DATA_1","1.00672573929753","18_02_2022__20_59_02"
"cbxdijwunksmelgt","2022-02-18T19:22:52.388Z","labosfecrpuztmny","eksperiment","DATA_1","0.912712181061172","18_02_2022__20_59_02"
"rgajqvfbuscthlek","2022-02-18T19:22:53.689Z","labosfecrpuztmny","eksperiment","DATA_1","1.98889719227074","18_02_2022__20_59_02"
"fkrmlbavwhxgqids","2022-02-18T19:22:55.769Z","ozehytcbwnxiqsga","eksperiment","DATA_1","6.60083554880365","18_02_2022__20_59_02"
"vywzxoeuktrsdqpf","2022-02-18T19:22:58.613Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","4.65348044948391","18_02_2022__20_59_02"
"dgvauoylqijsmhex","2022-02-18T19:22:58.836Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","4.32559034907598","18_02_2022__20_59_02"
"uzofgdcnibtpmyje","2022-02-18T19:22:59.098Z","ozehytcbwnxiqsga","eksperiment","DATA_1","9.80630459551842","18_02_2022__20_59_02"
"fekjmwhgsayzouir","2022-02-18T19:23:00.006Z","labosfecrpuztmny","eksperiment","DATA_1","1.16466051030212","18_02_2022__20_59_02"
"rptghvzlncxuyibo","2022-02-18T19:23:01.021Z","labosfecrpuztmny","eksperiment","DATA_1","1.3099177965197","18_02_2022__20_59_02"
"rziulyvjxpkqstow","2022-02-18T19:23:08.584Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","4.16535312960797","18_02_2022__20_59_02"
"fyxdrcewvztqbolu","2022-02-18T19:23:16.105Z","labosfecrpuztmny","eksperiment","DATA_1","1.87353208070887","18_02_2022__20_59_02"
"nivpldcbemjwrxgs","2022-02-18T19:23:19.654Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","8.87123745819398","18_02_2022__20_59_02"
"nlbkheigqvfjyadw","2022-02-18T19:23:23.379Z","hptaykbxgofzuien","eksperiment","DATA_1","0.195792383292383","18_02_2022__20_59_02"
"kadsblorxwziqvun","2022-02-18T19:23:28.853Z","gaitzbxocvshrdly","eksperiment","DATA_1","2.37704918032787","18_02_2022__20_59_02"
"yodfsjucbzxlvitq","2022-02-18T19:23:29.970Z","gaitzbxocvshrdly","eksperiment","DATA_1","2.21311475409836","18_02_2022__20_59_02"
"ruanhbzcdloetygi","2022-02-18T19:23:27.754Z","labosfecrpuztmny","eksperiment","DATA_1","1.60877281947262","18_02_2022__20_59_02"
"zusxfegrahbwnvqd","2022-02-18T19:23:31.471Z","gaitzbxocvshrdly","eksperiment","DATA_1","2.07259953161593","18_02_2022__20_59_02"
"btgfjxzmolavpnqh","2022-02-18T19:23:34.482Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","3.93849460985626","18_02_2022__20_59_02"
"ewmtpuaosgbvdqny","2022-02-18T19:23:35.853Z","labosfecrpuztmny","eksperiment","DATA_1","1.41233852887798","18_02_2022__20_59_02"
"zodyvsabirxwlejm","2022-02-18T19:23:49.669Z","labosfecrpuztmny","eksperiment","DATA_1","0.917049215330415","18_02_2022__20_59_02"
"zcyqxlmejdahsntg","2022-02-18T19:23:52.570Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","3.05893120455586","18_02_2022__20_59_02"
"zjdeaqgkbicmhtsn","2022-02-18T19:24:02.868Z","labosfecrpuztmny","eksperiment","DATA_1","0.818832070033095","18_02_2022__20_59_02"
"edfrawmgpnbscikh","2022-02-18T19:24:04.056Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","6.91471571906355","18_02_2022__20_59_02"
"jcfysxboatwuhrkv","2022-02-18T19:24:12.062Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","2.63588752733005","18_02_2022__20_59_02"
"dabvyczreqghfnli","2022-02-18T19:24:13.813Z","adbkcjeilognfmhp","eksperiment","DATA_1","0","18_02_2022__20_59_02"
"bajrlwhspqnxdioc","2022-02-18T19:24:15.680Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","0.507001688350382","18_02_2022__20_59_02"
"kynumxabregitwjv","2022-02-18T19:24:22.221Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","2.70445649383984","18_02_2022__20_59_02"
"abnchelkvotyidpf","2022-02-18T19:24:22.135Z","labosfecrpuztmny","eksperiment","DATA_1","0.767588342051884","18_02_2022__20_59_02"
"roqmsydnzklwupae","2022-02-18T19:24:23.380Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","3.29464514887064","18_02_2022__20_59_02"
"azbqrxojcflmudin","2022-02-18T19:24:23.824Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","8.16889632107023","18_02_2022__20_59_02"
"ahvbgmotwnursckd","2022-02-18T19:24:25.861Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","3.64219712525667","18_02_2022__20_59_02"
"eyvxomzjwtucqnkh","2022-02-18T19:24:47.352Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","1.15056112821531","18_02_2022__20_59_02"
"dgefnxmpcolvrzus","2022-02-18T19:24:51.807Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","2.78883183568678","18_02_2022__20_59_02"
"xnhdtpajmkevibsl","2022-02-18T19:25:03.649Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","4.82000770020534","18_02_2022__20_59_02"
"oxyaqsvrpwljbchd","2022-02-18T19:25:03.089Z","hptaykbxgofzuien","eksperiment","DATA_1","0.809851044226044","18_02_2022__20_59_02"
"xundqgcibkosalvr","2022-02-18T19:25:05.193Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","5.42607802874743","18_02_2022__20_59_02"
"oavgulpbxtnmwqrj","2022-02-18T19:25:07.316Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","5.18031314168378","18_02_2022__20_59_02"
"zapewlfctxkvsouj","2022-02-18T19:25:07.249Z","labosfecrpuztmny","eksperiment","DATA_1","0","18_02_2022__20_59_02"
"gtbeuczyapijxwvm","2022-02-18T19:25:11.137Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","5.39415426078029","18_02_2022__20_59_02"
"imxrnobcgfuljkpw","2022-02-18T19:25:13.286Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","3.82451552874743","18_02_2022__20_59_02"
"apbwmtcyzifurhlg","2022-02-18T19:25:13.950Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","3.4224204312115","18_02_2022__20_59_02"
"feqyhrzpxsvutlwn","2022-02-18T19:25:23.668Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","1.52946560227793","18_02_2022__20_59_02"
"jpzgyimwutvxfslr","2022-02-18T19:25:24.090Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","1.43184013830274","18_02_2022__20_59_02"
"dbtzlvcnxkqwgmop","2022-02-18T19:25:25.467Z","labosfecrpuztmny","eksperiment","DATA_1","2.73193124799829","18_02_2022__20_59_02"
"ebtyofvadwmchjkz","2022-02-18T19:25:28.059Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","5.02508361204013","18_02_2022__20_59_02"
"mydvwnjoueqchrfg","2022-02-18T19:25:30.111Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","5.51366786447639","18_02_2022__20_59_02"
"acvfbmuilkzsrteh","2022-02-18T19:25:32.166Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","2.55125449178645","18_02_2022__20_59_02"
"iagvhjbytlfoxncp","2022-02-18T19:25:34.372Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","1.94801026957638","18_02_2022__20_59_02"
"mbtpvydgwzqiojus","2022-02-18T19:25:34.160Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","2.24789848562628","18_02_2022__20_59_02"
"qxvciptufyowghln","2022-02-18T19:25:36.164Z","labosfecrpuztmny","eksperiment","DATA_1","2.15970961887477","18_02_2022__20_59_02"
"ipqemohjudcbnvgk","2022-02-18T19:25:37.864Z","labosfecrpuztmny","eksperiment","DATA_1","1.75403010569019","18_02_2022__20_59_02"
"fyjewbgznahcusxt","2022-02-18T19:25:39.756Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","3.15655666853104","18_02_2022__20_59_02"
"goeivtnjyprqfkwh","2022-02-18T19:25:38.678Z","odrvxgtmcuwlejny","eksperiment","DATA_1","0.360805165210786","18_02_2022__20_59_02"
"asmjngubeqdcfozv","2022-02-18T19:25:54.963Z","labosfecrpuztmny","eksperiment","DATA_1","1.75823369275115","18_02_2022__20_59_02"
"nduyjzaxrfspcqbm","2022-02-18T19:25:56.462Z","labosfecrpuztmny","eksperiment","DATA_1","1.48493381018469","18_02_2022__20_59_02"
"qlbopvawcrhxijym","2022-02-18T19:25:59.091Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","2.9813863928113","18_02_2022__20_59_02"
"xwjdqtlzbkhpnusg","2022-02-18T19:26:00.397Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","8.72073578595318","18_02_2022__20_59_02"
"eztxjsdhcfobvrng","2022-02-18T19:26:00.772Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","8.76254180602007","18_02_2022__20_59_02"
"tgacdwbfxzrplyhk","2022-02-18T19:26:02.682Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","5.91183264887064","18_02_2022__20_59_02"
"qrwdsjbgxhpamevi","2022-02-18T19:26:09.162Z","labosfecrpuztmny","eksperiment","DATA_1","1.38678338849151","18_02_2022__20_59_02"
"fxyezulqvmgtwrhs","2022-02-18T19:26:11.914Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","1.59454924492805","18_02_2022__20_59_02"
"glabcpyjvzeqdokm","2022-02-18T19:26:15.332Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","0.785082927798192","18_02_2022__20_59_02"
"oamsngfryiquclvp","2022-02-18T19:26:20.590Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","3.62965340179718","18_02_2022__20_59_02"
"bnseholcrygfiwdx","2022-02-18T19:26:33.660Z","labosfecrpuztmny","eksperiment","DATA_1","1.24586313654318","18_02_2022__20_59_02"
"plsdbjxrgcmoazvy","2022-02-18T19:26:35.195Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","6.5133779264214","18_02_2022__20_59_02"
"fzaumvldexytbjcp","2022-02-18T19:27:35.876Z","endbhjqtsymilzwa","eksperiment","DATA_1","0.226500566251416","18_02_2022__20_59_02"
"jszckyurtbpiqfnh","2022-02-18T19:27:37.157Z","endbhjqtsymilzwa","eksperiment","DATA_1","0.770101925254813","18_02_2022__20_59_02"
"lxurbcdjfnpvmoea","2022-02-18T19:26:42.194Z","labosfecrpuztmny","eksperiment","DATA_1","1.01946994768869","18_02_2022__20_59_02"
"wflujadecskoxtnb","2022-02-18T19:26:48.189Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","5.27095097535934","18_02_2022__20_59_02"
"qczwhrjipmudyofl","2022-02-18T19:26:57.270Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","4.68227424749164","18_02_2022__20_59_02"
"aqbmkrlcdeoztpvx","2022-02-18T19:26:56.943Z","labosfecrpuztmny","eksperiment","DATA_1","4.99939948756272","18_02_2022__20_59_02"
"altdjxzoriemfykc","2022-02-18T19:27:00.711Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","7.77683980534313","18_02_2022__20_59_02"
"yjqmazvrwxsuhtin","2022-02-18T19:27:02.631Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","1.00879646107693","18_02_2022__20_59_02"
"cfyobxawvdnrtgml","2022-02-18T19:27:07.475Z","labosfecrpuztmny","eksperiment","DATA_1","3.19305807622505","18_02_2022__20_59_02"
"xshoyvilnaqeufgd","2022-02-18T19:27:09.496Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","4.53221252566735","18_02_2022__20_59_02"
"kvdhcfosetnylapz","2022-02-18T19:27:14.291Z","labosfecrpuztmny","eksperiment","DATA_1","2.52695633607345","18_02_2022__20_59_02"
"gteaqrdhbsuvxwcf","2022-02-18T19:27:18.064Z","bacdgehfjkilnmpo","eksperiment","DATA_1","1.50121065375303","18_02_2022__20_59_02"
"cuwybjsepftlqnkv","2022-02-18T19:27:19.826Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","3.57023411371237","18_02_2022__20_59_02"
"atbrhiewkcvuznqm","2022-02-18T19:27:23.167Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","6.01738963039014","18_02_2022__20_59_02"
"yzaqwdjiurcvxstf","2022-02-18T19:27:26.000Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","0","18_02_2022__20_59_02"
"vxzrqufhpdcjoyas","2022-02-18T19:27:31.022Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","7.07247818275154","18_02_2022__20_59_02"
"ontfpyxkglaurbjh","2022-02-18T19:27:30.073Z","labosfecrpuztmny","eksperiment","DATA_1","1.94612736201559","18_02_2022__20_59_02"
"lghbziaufdepokqs","2022-02-18T19:27:33.990Z","labosfecrpuztmny","eksperiment","DATA_1","1.75403010569019","18_02_2022__20_59_02"
"lgnxcrbwjsfukohp","2022-02-18T19:27:34.607Z","labosfecrpuztmny","eksperiment","DATA_1","1.82655866339276","18_02_2022__20_59_02"
"dhfpoatewvkqyunb","2022-02-18T19:27:42.636Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","7.704215862423","18_02_2022__20_59_02"
"zjhwtansqoydfxmu","2022-02-18T19:27:46.339Z","labosfecrpuztmny","eksperiment","DATA_1","1.75403010569019","18_02_2022__20_59_02"
"hyxwruabcznjomid","2022-02-18T19:27:46.907Z","labosfecrpuztmny","eksperiment","DATA_1","1.57888064481691","18_02_2022__20_59_02"
"sfhgjqwyilmavbcd","2022-02-18T19:27:48.048Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","2.24080267558528","18_02_2022__20_59_02"
"jdoichrxbgusawqy","2022-02-18T19:27:47.389Z","labosfecrpuztmny","eksperiment","DATA_1","1.52343332977474","18_02_2022__20_59_02"
"xhdvcowbnfkerqtj","2022-02-18T19:27:52.715Z","gaitzbxocvshrdly","eksperiment","DATA_1","4.08665105386417","18_02_2022__20_59_02"
"nkxisajvlhubcowe","2022-02-18T19:27:55.942Z","gaitzbxocvshrdly","eksperiment","DATA_1","1.67447306791569","18_02_2022__20_59_02"
"kwxamjbrcysdneot","2022-02-18T19:27:54.582Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","5.44890257225147","18_02_2022__20_59_02"
"drgtyjcbfnpuxiaz","2022-02-18T19:27:55.348Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","5.85398252060781","18_02_2022__20_59_02"
"xqespcomgwvibynf","2022-02-18T19:28:02.036Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","4.58279845956354","18_02_2022__20_59_02"
"fdlxawzbpjvknteh","2022-02-18T19:28:01.985Z","hptaykbxgofzuien","eksperiment","DATA_1","2.46967137592138","18_02_2022__20_59_02"
"yoxdrmqjhnvzaswf","2022-02-18T19:28:03.221Z","labosfecrpuztmny","eksperiment","DATA_1","1.0536324330095","18_02_2022__20_59_02"
"yiugcfwzvosbednt","2022-02-18T19:28:08.422Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","8.03773100616017","18_02_2022__20_59_02"
"cfimxwadevhsyzbt","2022-02-18T19:28:15.572Z","cdfzjubmvhynkola","eksperiment","DATA_1","0.392863538681948","18_02_2022__20_59_02"
"jkyilqnzpxmwodbs","2022-02-18T19:28:16.341Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","3.05893120455586","18_02_2022__20_59_02"
"wipqbkodzrxylthc","2022-02-18T19:28:17.948Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","1.88742563685361","18_02_2022__20_59_02"
"voahpuwlnbjscdxi","2022-02-18T19:28:19.138Z","labosfecrpuztmny","eksperiment","DATA_1","1.0493621223444","18_02_2022__20_59_02"
"slrytgpmnauqbfvx","2022-02-18T19:28:21.620Z","labosfecrpuztmny","eksperiment","DATA_1","1.52343332977474","18_02_2022__20_59_02"
"qwicjoxhrtdpbmaf","2022-02-18T19:28:24.749Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","8.48177618069815","18_02_2022__20_59_02"
"qgkoasfbmchuzdwp","2022-02-18T19:28:32.169Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","9.22372304928131","18_02_2022__20_59_02"
"hdstnujkqyblvgaw","2022-02-18T19:28:32.419Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","5.41712185917172","18_02_2022__20_59_02"
"ericnuhavsxqfmgd","2022-02-18T19:28:32.986Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","6.6247889562022","18_02_2022__20_59_02"
"eyblsfnjvdoztkga","2022-02-18T19:28:33.429Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","5.85359984599589","18_02_2022__20_59_02"
"dwphcxseijgfvnzl","2022-02-18T19:28:33.587Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","6.8154732346807","18_02_2022__20_59_02"
"jwmcfoxbudvizrnl","2022-02-18T19:28:36.206Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","4.38424868407985","18_02_2022__20_59_02"
"gbodwnsmxahtycel","2022-02-18T19:28:41.412Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","9.47831108829569","18_02_2022__20_59_02"
"hbsgjrqpuctzlkai","2022-02-18T19:28:43.053Z","labosfecrpuztmny","eksperiment","DATA_1","1.36116152450091","18_02_2022__20_59_02"
"cqarbednhjvpguof","2022-02-18T19:28:43.904Z","labosfecrpuztmny","eksperiment","DATA_1","1.23732251521298","18_02_2022__20_59_02"
"tscuvafexwrqbhyz","2022-02-18T19:28:46.692Z","adbkcjeilognfmhp","eksperiment","DATA_1","0.981210855949896","18_02_2022__20_59_02"
"efbhracvqzgsydti","2022-02-18T19:28:47.740Z","adbkcjeilognfmhp","eksperiment","DATA_1","0.22964509394572","18_02_2022__20_59_02"
"acbdgehfkimlpjon","2022-02-18T19:28:48.456Z","adbkcjeilognfmhp","eksperiment","DATA_1","0.438413361169102","18_02_2022__20_59_02"
"iavbkqfpryuxjlgn","2022-02-18T19:28:56.289Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","5.13876411704312","18_02_2022__20_59_02"
"yqhratjobzfmnewx","2022-02-18T19:28:59.468Z","labosfecrpuztmny","eksperiment","DATA_1","0.797413793103448","18_02_2022__20_59_02"
"mprbfdljinycqoeu","2022-02-18T19:29:09.642Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","4.58138154517454","18_02_2022__20_59_02"
"dpzmysqtavunwolx","2022-02-18T19:29:10.996Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","4.84873137743428","18_02_2022__20_59_02"
"rzjsgdthqevciaux","2022-02-18T19:29:12.153Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","5.30431687598515","18_02_2022__20_59_02"
"chydznfilosmqkge","2022-02-18T19:29:12.178Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","3.72337012320329","18_02_2022__20_59_02"
"ajrzopcbfnuixsew","2022-02-18T19:29:12.781Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","1.54682274247492","18_02_2022__20_59_02"
"gobclxerdykztaim","2022-02-18T19:29:19.347Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","9.1499294147844","18_02_2022__20_59_02"
"kvyluxhzrbsqwgtn","2022-02-18T19:29:21.961Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","3.28672395383129","18_02_2022__20_59_02"
"vsanptzfbjxqhmcg","2022-02-18T19:29:22.798Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","7.7993454825462","18_02_2022__20_59_02"
"mjcvbxskwaudogel","2022-02-18T19:29:26.473Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","3.77246995729467","18_02_2022__20_59_02"
"sohygipfwxenducq","2022-02-18T19:29:27.224Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","3.66918263978548","18_02_2022__20_59_02"
"pjtxmgzkfeilyvrd","2022-02-18T19:29:27.925Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","3.5181001092462","18_02_2022__20_59_02"
"tcblksfnjeahyigz","2022-02-18T19:29:28.576Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","3.53399046578608","18_02_2022__20_59_02"
"ypsjzhgtmqxrinod","2022-02-18T19:29:30.410Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","5.07652412670972","18_02_2022__20_59_02"
"izmucpnfajqvbskh","2022-02-18T19:29:39.738Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","5.40757381258023","18_02_2022__20_59_02"
"bvpfekulxqirtshy","2022-02-18T19:29:52.321Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","6.99884496919918","18_02_2022__20_59_02"
"nabzkycgjtpvlsmh","2022-02-18T19:29:53.527Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","3.05978888603696","18_02_2022__20_59_02"
"tdnuqrpcgjsbimxf","2022-02-18T19:29:55.392Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","0.944816053511706","18_02_2022__20_59_02"
"hmikvwongxprlqab","2022-02-18T19:29:55.865Z","labosfecrpuztmny","eksperiment","DATA_1","1.28422920892495","18_02_2022__20_59_02"
"fytzwosjnrmhvgpd","2022-02-18T19:29:58.976Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","4.10026948695785","18_02_2022__20_59_02"
"szjayfvetuwrxqgc","2022-02-18T19:30:00.261Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","3.51451670310673","18_02_2022__20_59_02"
"zhanmyjwdiltsupx","2022-02-18T19:30:04.710Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","0.585284280936455","18_02_2022__20_59_02"
"bdyuenlravthmixc","2022-02-18T19:30:21.143Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","8.29023357289528","18_02_2022__20_59_02"
"ichbjgfylquetmzd","2022-02-18T19:30:22.864Z","labosfecrpuztmny","eksperiment","DATA_1","1.0621730543397","18_02_2022__20_59_02"
"pudvqblxmsgyjozc","2022-02-18T19:30:25.443Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","1.9074852412731","18_02_2022__20_59_02"
"eqjsnlzkdxtuwvih","2022-02-18T19:30:26.948Z","ozehytcbwnxiqsga","eksperiment","DATA_1","5.48423851120395","18_02_2022__20_59_02"
"xeclqiyahtdorfjw","2022-02-18T19:30:28.175Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","1.22922548767967","18_02_2022__20_59_02"
"jkazuvwlrbnxcdtq","2022-02-18T19:30:30.531Z","ozehytcbwnxiqsga","eksperiment","DATA_1","9.84428408659324","18_02_2022__20_59_02"
"zdclqjpiywhkbgem","2022-02-18T19:30:33.498Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","2.82608695652174","18_02_2022__20_59_02"
"zxnymhpjwvraqust","2022-02-18T19:30:36.141Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","5.10906594803478","18_02_2022__20_59_02"
"dcrzykbjlmawtxuh","2022-02-18T19:30:36.994Z","ozehytcbwnxiqsga","eksperiment","DATA_1","5.26769606912267","18_02_2022__20_59_02"
"dwejcubpzqtkmash","2022-02-18T19:30:38.595Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","2.68385639090277","18_02_2022__20_59_02"
"njoegspmhqdiktcr","2022-02-18T19:30:39.941Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","1.02629299281314","18_02_2022__20_59_02"
"agihblufswpeqdnr","2022-02-18T19:30:42.709Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","6.04942233632863","18_02_2022__20_59_02"
"clkwjzyvpusxthno","2022-02-18T19:30:43.974Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","1.91996745817868","18_02_2022__20_59_02"
"dczkrvwmsoepqhxl","2022-02-18T19:30:48.213Z","labosfecrpuztmny","eksperiment","DATA_1","1.39525728621757","18_02_2022__20_59_02"
"tdphjnyxbiuekcgr","2022-02-18T19:30:50.796Z","labosfecrpuztmny","eksperiment","DATA_1","1.75403010569019","18_02_2022__20_59_02"
"hixvoydzncetkrwm","2022-02-18T19:30:53.736Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","1.37959866220736","18_02_2022__20_59_02"
"fbegchadkiljpmno","2022-02-18T19:31:06.536Z","adbkcjeilognfmhp","eksperiment","DATA_1","0.201809324982603","18_02_2022__20_59_02"
"luxdgmywhisanbek","2022-02-18T19:31:07.015Z","labosfecrpuztmny","eksperiment","DATA_1","1.80520711006726","18_02_2022__20_59_02"
"ievwkjsgodluxtcb","2022-02-18T19:31:08.766Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","7.62577002053388","18_02_2022__20_59_02"
"rftbqdweazuhckli","2022-02-18T19:31:07.947Z","labosfecrpuztmny","eksperiment","DATA_1","1.58315095548201","18_02_2022__20_59_02"
"qivyspmgwdnljecb","2022-02-18T19:31:10.015Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","7.0030159137577","18_02_2022__20_59_02"
"xhklaszyfbqtcidn","2022-02-18T19:31:13.376Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","5.52310654685494","18_02_2022__20_59_02"
"famrwbcevzupsytx","2022-02-18T19:31:13.645Z","labosfecrpuztmny","eksperiment","DATA_1","1.5105556741753","18_02_2022__20_59_02"
"nbilraquxycgfeop","2022-02-18T19:32:17.435Z","endbhjqtsymilzwa","eksperiment","DATA_1","4.00906002265006","18_02_2022__20_59_02"
"lkyfqdbgwszonita","2022-02-18T19:31:21.056Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","6.21117813141684","18_02_2022__20_59_02"
"tfynpsgjhimzlbkd","2022-02-18T19:31:22.636Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","5.26421329568789","18_02_2022__20_59_02"
"gpxhedojvfrumyzs","2022-02-18T19:31:22.144Z","labosfecrpuztmny","eksperiment","DATA_1","1.31412138358066","18_02_2022__20_59_02"
"whfcqnadkexvlybu","2022-02-18T19:31:24.994Z","labosfecrpuztmny","eksperiment","DATA_1","1.22444485961354","18_02_2022__20_59_02"
"wnhuqgjrlmvtfexi","2022-02-18T19:31:32.211Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","4.13324563655031","18_02_2022__20_59_02"
"hlpdztcybjwerkuf","2022-02-18T19:31:36.443Z","gaitzbxocvshrdly","eksperiment","DATA_1","0.878220140515223","18_02_2022__20_59_02"
"rcbklysejdfqhmaz","2022-02-18T19:31:40.493Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","5.74146560574949","18_02_2022__20_59_02"
"emqgvzuldiwrocbf","2022-02-18T19:31:39.743Z","labosfecrpuztmny","eksperiment","DATA_1","1.15611988897192","18_02_2022__20_59_02"
"dphiborjxszqlcmt","2022-02-18T19:31:41.210Z","labosfecrpuztmny","eksperiment","DATA_1","1.00245542863243","18_02_2022__20_59_02"
"chzfnyolbvrkiamw","2022-02-18T19:31:42.709Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","3.28542094455852","18_02_2022__20_59_02"
"kavuslgbpywqfzch","2022-02-18T19:31:44.260Z","labosfecrpuztmny","eksperiment","DATA_1","0.660830575424362","18_02_2022__20_59_02"
"fmzijduoeynqhlkb","2022-02-18T19:31:46.845Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","0.493311036789298","18_02_2022__20_59_02"
"ydevpuwofgbhlkcx","2022-02-18T19:31:48.125Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","6.32541720154044","18_02_2022__20_59_02"
"imwyghlrfabounpj","2022-02-18T19:31:49.862Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","0.00836120401337792","18_02_2022__20_59_02"
"qcgsixhojeumlbvy","2022-02-18T19:31:51.371Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","6.02140015400411","18_02_2022__20_59_02"
"agzlspnrybjxufwm","2022-02-18T19:31:50.377Z","labosfecrpuztmny","eksperiment","DATA_1","0.50709939148073","18_02_2022__20_59_02"
"kimbxavzgrpnyeoc","2022-02-18T19:32:55.119Z","endbhjqtsymilzwa","eksperiment","DATA_1","4.10906002265006","18_02_2022__20_59_02"
"fwnhlcjryzimktbv","2022-02-18T19:31:55.722Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","2.66507315195072","18_02_2022__20_59_02"
"jkuyqarbwzfpoclx","2022-02-18T19:32:56.237Z","endbhjqtsymilzwa","eksperiment","DATA_1","4.20906002265006","18_02_2022__20_59_02"
"jrtblswkacezuqfi","2022-02-18T19:32:56.973Z","endbhjqtsymilzwa","eksperiment","DATA_1","4.10906002265006","18_02_2022__20_59_02"
"fsbtaehrcdqgnump","2022-02-18T19:32:00.971Z","adbkcjeilognfmhp","eksperiment","DATA_1","7.22338204592902","18_02_2022__20_59_02"
"mktsyudnizjxrcbq","2022-02-18T19:32:03.270Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","5.07652412670972","18_02_2022__20_59_02"
"spclrghwkjboxifv","2022-02-18T19:32:02.859Z","labosfecrpuztmny","eksperiment","DATA_1","0.174015159602861","18_02_2022__20_59_02"
"saltmfoejwbpugci","2022-02-18T19:32:08.190Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","2.42203542094456","18_02_2022__20_59_02"
"wpcqdfjbvgnmkzly","2022-02-18T19:32:09.553Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","2.41384447313537","18_02_2022__20_59_02"
"naqltormwihzbcpv","2022-02-18T19:32:15.808Z","labosfecrpuztmny","eksperiment","DATA_1","0.925589836660617","18_02_2022__20_59_02"
"bazfokrwdutcvsmh","2022-02-18T19:32:16.124Z","labosfecrpuztmny","eksperiment","DATA_1","0.93840076865592","18_02_2022__20_59_02"
"aesxwzqjdcompikr","2022-02-18T19:32:19.707Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","1.88735241273101","18_02_2022__20_59_02"
"qvxljpturyaehbsn","2022-02-18T19:32:18.288Z","odrvxgtmcuwlejny","eksperiment","DATA_1","3.262438283327","18_02_2022__20_59_02"
"rtudxlfizehnmyav","2022-02-18T19:32:22.266Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","2.12781805541762","18_02_2022__20_59_02"
"lnhayfprmvoqcsgi","2022-02-18T19:32:22.933Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","2.04836627271824","18_02_2022__20_59_02"
"abdcgefhmnopjikl","2022-02-18T19:32:27.828Z","adbkcjeilognfmhp","eksperiment","DATA_1","3.84133611691023","18_02_2022__20_59_02"
"nitdrlauhewvqzcp","2022-02-18T19:32:35.073Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","6.62426206365503","18_02_2022__20_59_02"
"kogxvrpuabzltiny","2022-02-18T19:32:40.189Z","labosfecrpuztmny","eksperiment","DATA_1","0.814561759367994","18_02_2022__20_59_02"
"wohkdsavqjmgztbu","2022-02-18T19:32:40.720Z","odrvxgtmcuwlejny","eksperiment","DATA_1","3.58906190657045","18_02_2022__20_59_02"
"lecbgrwxanyuvfop","2022-02-18T19:32:48.054Z","ozehytcbwnxiqsga","eksperiment","DATA_1","3.96505886821117","18_02_2022__20_59_02"
"cfvuaqmibtoshgze","2022-02-18T19:32:51.529Z","ozehytcbwnxiqsga","eksperiment","DATA_1","2.49139527155336","18_02_2022__20_59_02"
"idqsxplgeuzfmwkn","2022-02-18T19:32:58.002Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","4.63849438871785","18_02_2022__20_59_02"
"aupgktwhznyobvme","2022-02-18T19:32:58.803Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","4.97219187605522","18_02_2022__20_59_02"
"eusgkqvbjynxltwr","2022-02-18T19:33:01.145Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","1.7056856187291","18_02_2022__20_59_02"
"fzhejotmiqlkysnp","2022-02-18T19:33:02.491Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","5.9551533024864","18_02_2022__20_59_02"
"kadnsyqlpvoewbcf","2022-02-18T19:33:03.017Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","6.87066863449692","18_02_2022__20_59_02"
"hamruegizwlsbdjk","2022-02-18T19:33:00.944Z","odrvxgtmcuwlejny","eksperiment","DATA_1","3.8321306494493","18_02_2022__20_59_02"
"tkwbnyriozljxsup","2022-02-18T19:33:03.928Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","6.73615701428789","18_02_2022__20_59_02"
"bhimdpzejvkanfwt","2022-02-18T19:33:09.319Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","1.47097985112936","18_02_2022__20_59_02"
"slgapwnrxfzhuyio","2022-02-18T19:33:16.184Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","7.75186088295688","18_02_2022__20_59_02"
"dbcaghefijlkmonp","2022-02-18T19:33:23.567Z","adbkcjeilognfmhp","eksperiment","DATA_1","0.974251913709116","18_02_2022__20_59_02"
"nfhdzwmqgupobryk","2022-02-18T19:33:24.433Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","4.62093862815885","18_02_2022__20_59_02"
"djptkcglqebisvzy","2022-02-18T19:33:28.016Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","8.37573793634497","18_02_2022__20_59_02"
"ajbqixwvshlkefmc","2022-02-18T19:33:30.659Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","1.1092306211499","18_02_2022__20_59_02"
"ayfhpzwidsbktrgq","2022-02-18T19:33:32.736Z","labosfecrpuztmny","eksperiment","DATA_1","0.575357638518202","18_02_2022__20_59_02"
"gadhjlsqevfitwbu","2022-02-18T19:33:38.360Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","5.04180602006689","18_02_2022__20_59_02"
"skzwtjeydfqnlvic","2022-02-18T19:33:42.179Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","3.9710994140431","18_02_2022__20_59_02"
"mlrhbakxozsqupfv","2022-02-18T19:33:42.633Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","3.93931870096335","18_02_2022__20_59_02"
"zakoituylrvmxjwg","2022-02-18T19:33:48.118Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","0.681789014373717","18_02_2022__20_59_02"
"zcpyuvjoaflwerxq","2022-02-18T19:33:48.547Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","3.48197488178167","18_02_2022__20_59_02"
"apulhvyjfsxbrikw","2022-02-18T19:33:49.894Z","ozehytcbwnxiqsga","eksperiment","DATA_1","10","18_02_2022__20_59_02"
"ahfgbdeckiljomnp","2022-02-18T19:33:50.009Z","adbkcjeilognfmhp","eksperiment","DATA_1","0.0208768267223382","18_02_2022__20_59_02"
"fciedgkjhlmbnoap","2022-02-18T19:33:50.659Z","adbkcjeilognfmhp","eksperiment","DATA_1","0.187891440501044","18_02_2022__20_59_02"
"vgxkpduioartzwqh","2022-02-18T19:33:59.793Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","0.313382315195072","18_02_2022__20_59_02"
"ksdoycwzgehbtanl","2022-02-18T19:34:05.007Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","7.48716632443532","18_02_2022__20_59_02"
"pkchdsqnxtveymjg","2022-02-18T19:34:04.989Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","0","18_02_2022__20_59_02"
"hlonfmipqjsbderg","2022-02-18T19:34:07.572Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","0.124165811088296","18_02_2022__20_59_02"
"kopghwrbcfmnaequ","2022-02-18T19:34:07.921Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","0.131705595482546","18_02_2022__20_59_02"
"favtuzjbwrknyxop","2022-02-18T19:34:08.229Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","7.41123746151554","18_02_2022__20_59_02"
"xojgawvepfqnhizl","2022-02-18T19:34:09.759Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","7.15340179717587","18_02_2022__20_59_02"
"iwrjyozakhseqtcn","2022-02-18T19:34:09.567Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","5.59719326791071","18_02_2022__20_59_02"
"hclopfgbzkyuseav","2022-02-18T19:34:16.496Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","2.95986622073579","18_02_2022__20_59_02"
"pindwajvhsembzyc","2022-02-18T19:34:17.737Z","cdfzjubmvhynkola","eksperiment","DATA_1","0.0655891833810888","18_02_2022__20_59_02"
"ajhbxmnytfeczglp","2022-02-18T19:34:18.529Z","cdfzjubmvhynkola","eksperiment","DATA_1","0.00313395415472779","18_02_2022__20_59_02"
"iqxmhpnfezjydcgk","2022-02-18T19:34:22.468Z","labosfecrpuztmny","eksperiment","DATA_1","0.327679619942351","18_02_2022__20_59_02"
"iwjrhcnbuyedsamv","2022-02-18T19:34:23.489Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","1.34897972279261","18_02_2022__20_59_02"
"qbnxgzrmyusvcohi","2022-02-18T19:34:24.190Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","4.75110591345909","18_02_2022__20_59_02"
"ditwayebpcsvmoxz","2022-02-18T19:34:27.824Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","7.99930479690138","18_02_2022__20_59_02"
"unglaibyhwfsztep","2022-02-18T19:34:28.274Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","8.03903068825107","18_02_2022__20_59_02"
"sktpgqlrafdeyxmc","2022-02-18T19:34:28.643Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","8.10259211441057","18_02_2022__20_59_02"
"ngimeyphvjctlfkb","2022-02-18T19:34:38.205Z","fynegbqitazohkwm","eksperiment","DATA_1","2.74846086191733","18_02_2022__20_59_02"
"ajcqigdobxfkwzvm","2022-02-18T19:34:33.942Z","hptaykbxgofzuien","eksperiment","DATA_1","3.60507524570025","18_02_2022__20_59_02"
"hpjvusiqdckxrwgy","2022-02-18T19:34:46.396Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","7.6798318788501","18_02_2022__20_59_02"
"tvhldkogqynrpjab","2022-02-18T19:34:45.833Z","labosfecrpuztmny","eksperiment","DATA_1","0.165474538272659","18_02_2022__20_59_02"
"izvjmwxnbhrspyqa","2022-02-18T19:34:46.917Z","labosfecrpuztmny","eksperiment","DATA_1","0.626601366499413","18_02_2022__20_59_02"
"shcbvkfgtdpmjlen","2022-02-18T19:34:48.250Z","labosfecrpuztmny","eksperiment","DATA_1","0","18_02_2022__20_59_02"
"ogyajmxfuzinsbrh","2022-02-18T19:34:51.615Z","gaitzbxocvshrdly","eksperiment","DATA_1","2.03747072599532","18_02_2022__20_59_02"
"fpcdutimzwglnehk","2022-02-18T19:34:51.635Z","alpjhrzgomxfnbuq","eksperiment","DATA_1","0.658207923832924","18_02_2022__20_59_02"
"ytwdzbaunhgcjlsf","2022-02-18T19:34:57.475Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","3.00167224080268","18_02_2022__20_59_02"
"yztfwnusxqvhrmpe","2022-02-18T19:34:58.912Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","6.24802969441196","18_02_2022__20_59_02"
"dmwvrjcybetnlauf","2022-02-18T19:35:04.121Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","2.98494983277592","18_02_2022__20_59_02"
"jnvihfdcbuexaoqk","2022-02-18T19:35:08.486Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","0.953177257525084","18_02_2022__20_59_02"
"aexybinhfcqdjrlt","2022-02-18T19:35:11.225Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","1.73735882956879","18_02_2022__20_59_02"
"dxlemjzqiwnsfcbv","2022-02-18T19:35:10.440Z","labosfecrpuztmny","eksperiment","DATA_1","2.62083644710153","18_02_2022__20_59_02"
"lxmjhoidbecazryf","2022-02-18T19:35:12.590Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","2.03373652464066","18_02_2022__20_59_02"
"abhpztwefnykmgud","2022-02-18T19:35:14.202Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","2.36412345995893","18_02_2022__20_59_02"
"dycnrleqfvohwzsx","2022-02-18T19:35:19.902Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","7.950943275154","18_02_2022__20_59_02"
"taugbysrpcdkejqh","2022-02-18T19:35:26.721Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","8.17457007186858","18_02_2022__20_59_02"
"ocbtsfygiveqxpna","2022-02-18T19:35:26.029Z","odrvxgtmcuwlejny","eksperiment","DATA_1","0","18_02_2022__20_59_02"
"kozxapjsruwdvgef","2022-02-18T19:35:31.007Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","7.62836970474968","18_02_2022__20_59_02"
"falbxozyrguhdnsp","2022-02-18T19:35:33.090Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","5.09136955010428","18_02_2022__20_59_02"
"ajunmsgyczdpkqfo","2022-02-18T19:35:34.125Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","5.35343628960175","18_02_2022__20_59_02"
"inlksrvceptdqbaf","2022-02-18T19:35:38.403Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","8.61091504106776","18_02_2022__20_59_02"
"cbefghadlijkmnop","2022-02-18T19:35:39.463Z","adbkcjeilognfmhp","eksperiment","DATA_1","5.42797494780793","18_02_2022__20_59_02"
"bhekajiflncdgmop","2022-02-18T19:35:39.964Z","adbkcjeilognfmhp","eksperiment","DATA_1","5.21920668058455","18_02_2022__20_59_02"
"qzldtfwnrsbhgxco","2022-02-18T19:35:47.233Z","gaitzbxocvshrdly","eksperiment","DATA_1","2.89227166276347","18_02_2022__20_59_02"
"ashzupeijbcyrgld","2022-02-18T19:35:48.479Z","labosfecrpuztmny","eksperiment","DATA_1","3.00096081989965","18_02_2022__20_59_02"
"fparbyzcmqnxokiw","2022-02-18T19:35:51.070Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","4.16535312960797","18_02_2022__20_59_02"
"mabcdyrvekfzqupg","2022-02-18T19:35:50.062Z","labosfecrpuztmny","eksperiment","DATA_1","3.22295025088075","18_02_2022__20_59_02"
"wvcfslbxohdpaqyj","2022-02-18T19:35:56.778Z","labosfecrpuztmny","eksperiment","DATA_1","3.70983239030639","18_02_2022__20_59_02"
"gspmhxwbckoeznat","2022-02-18T19:35:57.779Z","labosfecrpuztmny","eksperiment","DATA_1","1.28849951959005","18_02_2022__20_59_02"
"hdkwcqbpoujnxrat","2022-02-18T19:35:58.816Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","7.18095143509783","18_02_2022__20_59_02"
"mwghlszkeondjfiq","2022-02-18T19:35:58.496Z","labosfecrpuztmny","eksperiment","DATA_1","2.15110227394043","18_02_2022__20_59_02"
"znkqysmblvtruawj","2022-02-18T19:36:00.492Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","3.15655666853104","18_02_2022__20_59_02"
"vmtpbyzfghiqolxj","2022-02-18T19:36:02.613Z","gaitzbxocvshrdly","eksperiment","DATA_1","2.40046838407494","18_02_2022__20_59_02"
"ftupshiygdlanjxq","2022-02-18T19:37:06.257Z","endbhjqtsymilzwa","eksperiment","DATA_1","2.37825594563986","18_02_2022__20_59_02"
"iblmqshnuxjarogy","2022-02-18T19:36:07.732Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","8.89903105749487","18_02_2022__20_59_02"
"dbjgafhwxrozentl","2022-02-18T19:36:13.981Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","4.0982222663621","18_02_2022__20_59_02"
"aphlwbqojyrmsned","2022-02-18T19:36:16.925Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","0.0836120401337793","18_02_2022__20_59_02"
"hflidwcbxgestrzu","2022-02-18T19:36:20.828Z","labosfecrpuztmny","eksperiment","DATA_1","1.9973710899968","18_02_2022__20_59_02"
"hzoutsyqaxrvwgpn","2022-02-18T19:36:26.107Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","1.91996745817868","18_02_2022__20_59_02"
"dafbpcthigemxjku","2022-02-18T19:36:25.061Z","labosfecrpuztmny","eksperiment","DATA_1","1.26714796626455","18_02_2022__20_59_02"
"kdljbmacifgehnop","2022-02-18T19:36:27.766Z","adbkcjeilognfmhp","eksperiment","DATA_1","0.222686151704941","18_02_2022__20_59_02"
"icdjakblfgehnmop","2022-02-18T19:36:30.502Z","adbkcjeilognfmhp","eksperiment","DATA_1","2.21294363256785","18_02_2022__20_59_02"
"mdjngxpqibwoechr","2022-02-18T19:36:37.437Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","4.60526315789474","18_02_2022__20_59_02"
"axftszqbjinmvgol","2022-02-18T19:36:50.647Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","5.97183008213552","18_02_2022__20_59_02"
"ahzskifmnudqvbgw","2022-02-18T19:36:48.551Z","odrvxgtmcuwlejny","eksperiment","DATA_1","8.50360805165211","18_02_2022__20_59_02"
"geafchbdkjilmpon","2022-02-18T19:36:52.018Z","adbkcjeilognfmhp","eksperiment","DATA_1","4.03618649965205","18_02_2022__20_59_02"
"gdalwtihfqepkvxj","2022-02-18T19:36:52.092Z","labosfecrpuztmny","eksperiment","DATA_1","0.921319525995516","18_02_2022__20_59_02"
"ryqacdbhfegnslzk","2022-02-18T19:36:58.145Z","adbkcjeilognfmhp","eksperiment","DATA_1","1.3500347947112","18_02_2022__20_59_02"
"zanvqrdslgukofje","2022-02-18T19:36:58.868Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","4.735465862423","18_02_2022__20_59_02"
"psredwufhojmckgt","2022-02-18T19:36:58.925Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","3.64534710497567","18_02_2022__20_59_02"
"wpudicybmzjsexqv","2022-02-18T19:36:59.343Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","3.62138742675539","18_02_2022__20_59_02"
"antzrshqmobcxyei","2022-02-18T19:37:00.950Z","odrvxgtmcuwlejny","eksperiment","DATA_1","3.91556684390429","18_02_2022__20_59_02"
"npyghlowabmuzdcq","2022-02-18T19:37:05.542Z","labosfecrpuztmny","eksperiment","DATA_1","0.481410803885983","18_02_2022__20_59_02"
"aflnuohzgvrpbmkc","2022-02-18T19:37:08.787Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","2.93003851091142","18_02_2022__20_59_02"
"hdmjysqtuxcpfwkz","2022-02-18T19:37:08.035Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","3.24796404806833","18_02_2022__20_59_02"
"grlfseaphztyiqxk","2022-02-18T19:37:12.653Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","3.06115246406571","18_02_2022__20_59_02"
"dcbiefzanhuwjrpm","2022-02-18T19:37:17.335Z","fynegbqitazohkwm","eksperiment","DATA_1","2.63852242744063","18_02_2022__20_59_02"
"xsrbmaidjhktzupq","2022-02-18T19:37:13.929Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","3.39346445071869","18_02_2022__20_59_02"
"gblxqkvdfrpnjsyi","2022-02-18T19:37:21.439Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","1.86454849498328","18_02_2022__20_59_02"
"cosvrudlfxiwhegz","2022-02-18T19:37:21.459Z","hptaykbxgofzuien","eksperiment","DATA_1","1.22715755528256","18_02_2022__20_59_02"
"wicqydxvtbgflejm","2022-02-18T19:38:31.078Z","endbhjqtsymilzwa","eksperiment","DATA_1","1.80067950169875","18_02_2022__20_59_02"
"hqxnulawkmoyrbsf","2022-02-18T19:38:31.822Z","endbhjqtsymilzwa","eksperiment","DATA_1","1.48357870894677","18_02_2022__20_59_02"
"vxycgtijunbdpahs","2022-02-18T19:37:36.270Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","0.133779264214047","18_02_2022__20_59_02"
"vxhzwodacmugbfey","2022-02-18T19:37:36.955Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","4.91381502008441","18_02_2022__20_59_02"
"lcbmgofnjruxtahi","2022-02-18T19:37:43.505Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","2.95527464065708","18_02_2022__20_59_02"
"abpvfskxnuqtjryg","2022-02-18T19:37:45.051Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","2.80736652977413","18_02_2022__20_59_02"
"itnhdbvglkqcosjf","2022-02-18T19:37:45.874Z","ozehytcbwnxiqsga","eksperiment","DATA_1","5.1576148879605","18_02_2022__20_59_02"
"csdbepatulviwfyh","2022-02-18T19:37:49.323Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","2.09726321868583","18_02_2022__20_59_02"
"abcodqzwesunmlft","2022-02-18T19:37:48.739Z","labosfecrpuztmny","eksperiment","DATA_1","0.485747838155226","18_02_2022__20_59_02"
"csqhrlxgkyanupmt","2022-02-18T19:37:49.439Z","labosfecrpuztmny","eksperiment","DATA_1","0.366112415928259","18_02_2022__20_59_02"
"qnftijoxpuesmvdy","2022-02-18T19:37:50.257Z","labosfecrpuztmny","eksperiment","DATA_1","0.451518629230277","18_02_2022__20_59_02"
"zqfedvtupjyglwkc","2022-02-18T19:37:53.217Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","4.25933649897331","18_02_2022__20_59_02"
"doicevgkrxuzmhbl","2022-02-18T19:37:57.235Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","2.28672162081637","18_02_2022__20_59_02"
"wzebxvnyufsgrqta","2022-02-18T19:37:57.619Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","3.61214216708191","18_02_2022__20_59_02"
"ohletdyfcxgjzubi","2022-02-18T19:37:58.085Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","2.31837819048565","18_02_2022__20_59_02"
"jibdalkcfegpohnm","2022-02-18T19:38:00.664Z","bacdgehfjkilnmpo","eksperiment","DATA_1","0.823244552058111","18_02_2022__20_59_02"
"ujvgqezhdyliwtab","2022-02-18T19:38:00.511Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","2.23892640778627","18_02_2022__20_59_02"
"bcadfgehijoknlpm","2022-02-18T19:38:01.076Z","bacdgehfjkilnmpo","eksperiment","DATA_1","0.903954802259887","18_02_2022__20_59_02"
"ngxbmidrekwpuhqj","2022-02-18T19:38:01.173Z","labosfecrpuztmny","eksperiment","DATA_1","0.366112415928259","18_02_2022__20_59_02"
"agbrivuchenjqmls","2022-02-18T19:38:07.537Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","3.89036832648871","18_02_2022__20_59_02"
"flebpacojidkhgnm","2022-02-18T19:38:08.451Z","adbkcjeilognfmhp","eksperiment","DATA_1","0","18_02_2022__20_59_02"
"gqlzyksratmfvhdn","2022-02-18T19:38:09.015Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","2.87466481279174","18_02_2022__20_59_02"
"labjdckiohfmegnp","2022-02-18T19:38:10.715Z","adbkcjeilognfmhp","eksperiment","DATA_1","0.243562978427279","18_02_2022__20_59_02"
"ehjngufpdvyoxmci","2022-02-18T19:38:17.234Z","gaitzbxocvshrdly","eksperiment","DATA_1","3.23185011709602","18_02_2022__20_59_02"
"jayvzwoxsuferiqt","2022-02-18T19:38:16.452Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","2.60334570600498","18_02_2022__20_59_02"
"gmpodwfejclsrabh","2022-02-18T19:38:17.733Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","3.3613000513347","18_02_2022__20_59_02"
"dznlcvfubhgyasmp","2022-02-18T19:38:18.537Z","labosfecrpuztmny","eksperiment","DATA_1","0.233732785310131","18_02_2022__20_59_02"
"xertqolsdujcbyzg","2022-02-18T19:38:33.084Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","1.54682274247492","18_02_2022__20_59_02"
"cdspweyuhlfkaiqx","2022-02-18T19:38:36.574Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","2.10385837719734","18_02_2022__20_59_02"
"idqpbsolaruwtxnf","2022-02-18T19:38:39.824Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","2.43518993839836","18_02_2022__20_59_02"
"hicjbzlyfsrvdtwp","2022-02-18T19:38:40.700Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","0.560200668896321","18_02_2022__20_59_02"
"ahibcgxlzdverqjt","2022-02-18T19:38:43.836Z","labosfecrpuztmny","eksperiment","DATA_1","0.934130457990819","18_02_2022__20_59_02"
"cosdnwrxiekbtfph","2022-02-18T19:38:47.467Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","1.67522464698331","18_02_2022__20_59_02"
"duzhxnmbrjvwetpk","2022-02-18T19:38:49.669Z","labosfecrpuztmny","eksperiment","DATA_1","1.42941977153838","18_02_2022__20_59_02"
"ekocbhraxvgjtdnz","2022-02-18T19:38:51.668Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","4.38927746406571","18_02_2022__20_59_02"
"kgmhzwspoqeuinyt","2022-02-18T19:38:52.700Z","ozehytcbwnxiqsga","eksperiment","DATA_1","10","18_02_2022__20_59_02"
"cpbuqgondvfmaixw","2022-02-18T19:38:51.966Z","hptaykbxgofzuien","eksperiment","DATA_1","5.5727886977887","18_02_2022__20_59_02"
"lojvzysuwxbqnagr","2022-02-18T19:38:56.667Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","2.05013474347892","18_02_2022__20_59_02"
"ayktlrvbieupnmjd","2022-02-18T19:39:02.052Z","labosfecrpuztmny","eksperiment","DATA_1","1.23732251521298","18_02_2022__20_59_02"
"seodtkxugpijznlf","2022-02-18T19:39:12.925Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","0.292642140468227","18_02_2022__20_59_02"
"ihgfekqrdxucyltm","2022-02-18T19:39:18.576Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","3.72665875256674","18_02_2022__20_59_02"
"ndmxcugvjlpbksaq","2022-02-18T19:39:19.284Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","2.80913116016427","18_02_2022__20_59_02"
"ajucwlizqtvgfxoy","2022-02-18T19:39:24.133Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","0.937098844672657","18_02_2022__20_59_02"
"xtuwmjhircenbqzd","2022-02-18T19:39:24.752Z","labosfecrpuztmny","eksperiment","DATA_1","0.946874666381979","18_02_2022__20_59_02"
"yluvdpcgjwfxazmi","2022-02-18T19:39:28.774Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","2.55117428131417","18_02_2022__20_59_02"
"bolskwvgxyqphnde","2022-02-18T19:39:30.992Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","3.04807815708419","18_02_2022__20_59_02"
"egxjnpyuhqfotwkc","2022-02-18T19:39:34.533Z","labosfecrpuztmny","eksperiment","DATA_1","0.840116899754457","18_02_2022__20_59_02"
"dgzytlxsivjahofe","2022-02-18T19:39:45.645Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","2.87931532340862","18_02_2022__20_59_02"
"mntabqsoxkchjdpi","2022-02-18T19:39:59.176Z","ozehytcbwnxiqsga","eksperiment","DATA_1","5.26769606912267","18_02_2022__20_59_02"
"ndkglqateybofrvx","2022-02-18T19:40:02.003Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","3.6371237458194","18_02_2022__20_59_02"
"joalhxrqstwbfymz","2022-02-18T19:40:07.385Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","0.513478818998716","18_02_2022__20_59_02"
"lqgyctzrimsoxwfd","2022-02-18T19:40:14.447Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","4.62093862815885","18_02_2022__20_59_02"
"crgitdkxvmnqjbwf","2022-02-18T19:40:16.986Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","2.41626026694045","18_02_2022__20_59_02"
"cbinazjorxfdgywk","2022-02-18T19:40:20.345Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","1.96084516833846","18_02_2022__20_59_02"
"pdcjoqgmrsbztkhu","2022-02-18T19:40:21.495Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","1.92918859866918","18_02_2022__20_59_02"
"wxabtcgmrosyzqul","2022-02-18T19:40:21.231Z","labosfecrpuztmny","eksperiment","DATA_1","1.09206522899541","18_02_2022__20_59_02"
"lyjqsrtpfwzcbxgn","2022-02-18T19:40:25.380Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","2.99384756190573","18_02_2022__20_59_02"
"hiomjfeabgcdkpnl","2022-02-18T19:40:25.248Z","adbkcjeilognfmhp","eksperiment","DATA_1","0.612386917188587","18_02_2022__20_59_02"
"cbdaefhgjkilpomn","2022-02-18T19:40:26.172Z","adbkcjeilognfmhp","eksperiment","DATA_1","0.57759220598469","18_02_2022__20_59_02"
"mcejsklzaotbhgwv","2022-02-18T19:40:37.418Z","gaitzbxocvshrdly","eksperiment","DATA_1","2.74004683840749","18_02_2022__20_59_02"
"hpgixdyrwcsmvztb","2022-02-18T19:40:41.289Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","2.59160035934292","18_02_2022__20_59_02"
"aqvubiytwzkjpslr","2022-02-18T19:40:53.595Z","hptaykbxgofzuien","eksperiment","DATA_1","2.2134136977887","18_02_2022__20_59_02"
"tbpfigrqswlmxnzj","2022-02-18T19:40:54.243Z","labosfecrpuztmny","eksperiment","DATA_1","0.934130457990819","18_02_2022__20_59_02"
"banzylkfitxrpghj","2022-02-18T19:40:55.577Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","1.5133779264214","18_02_2022__20_59_02"
"yvnzsdiecplubghj","2022-02-18T19:41:57.241Z","endbhjqtsymilzwa","eksperiment","DATA_1","1.13250283125708","18_02_2022__20_59_02"
"goshjenzkdufwxpi","2022-02-18T19:40:58.866Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","1.90628208418891","18_02_2022__20_59_02"
"fmbkxtqwiasoperc","2022-02-18T19:41:05.378Z","labosfecrpuztmny","eksperiment","DATA_1","0.912712181061172","18_02_2022__20_59_02"
"hiogxmyqtskpfelu","2022-02-18T19:41:06.511Z","labosfecrpuztmny","eksperiment","DATA_1","0.238003095975232","18_02_2022__20_59_02"
"phqzoucvytdmxenr","2022-02-18T19:41:08.595Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","2.18030202877917","18_02_2022__20_59_02"
"jecrdmatunsfvioq","2022-02-18T19:41:12.312Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","1.6352170026815","18_02_2022__20_59_02"
"qkclsdewvzgjuaxb","2022-02-18T19:41:12.762Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","1.51591518522197","18_02_2022__20_59_02"
"eyifdorpxjchbngz","2022-02-18T19:41:15.401Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","5.84448160535117","18_02_2022__20_59_02"
"ivagwbofmrkqjcut","2022-02-18T19:41:24.809Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","3.67508341889117","18_02_2022__20_59_02"
"upksetolayhbdwjm","2022-02-18T19:41:25.116Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","3.6827034137577","18_02_2022__20_59_02"
"pyxrlcbfmknvhuea","2022-02-18T19:41:29.726Z","labosfecrpuztmny","eksperiment","DATA_1","0.455788939895377","18_02_2022__20_59_02"
"cypwtnhiqlbvmzek","2022-02-18T19:41:30.277Z","labosfecrpuztmny","eksperiment","DATA_1","0.652223230490018","18_02_2022__20_59_02"
"oncsbiltwjzaqykx","2022-02-18T19:41:33.010Z","labosfecrpuztmny","eksperiment","DATA_1","1.03234760328814","18_02_2022__20_59_02"
"wysfuzlxabhdirvq","2022-02-18T19:41:35.326Z","labosfecrpuztmny","eksperiment","DATA_1","1.39525728621757","18_02_2022__20_59_02"
"dzefyojnwsltcxqh","2022-02-18T19:41:40.076Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","3.12401484720598","18_02_2022__20_59_02"
"mgoajlnbztiuxfke","2022-02-18T19:41:45.188Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","1.47811858316222","18_02_2022__20_59_02"
"nhdwbryijzofpuqm","2022-02-18T19:41:45.665Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","8.2943143812709","18_02_2022__20_59_02"
"dgerfqmpivkcyjla","2022-02-18T19:41:53.429Z","gaitzbxocvshrdly","eksperiment","DATA_1","3.70023419203747","18_02_2022__20_59_02"
"wbodieracmgzynxt","2022-02-18T19:41:52.669Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","1.30946469361406","18_02_2022__20_59_02"
"cpxdijwhkvluyoba","2022-02-18T19:41:54.104Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","1.21412255437481","18_02_2022__20_59_02"
"uhfasbltxorckpqm","2022-02-18T19:41:56.701Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","0.914634146341463","18_02_2022__20_59_02"
"ajgbcwrhxfosutvy","2022-02-18T19:41:59.998Z","labosfecrpuztmny","eksperiment","DATA_1","1.28422920892495","18_02_2022__20_59_02"
"ncbjioltxvufkzsy","2022-02-18T19:42:01.091Z","labosfecrpuztmny","eksperiment","DATA_1","1.24152610227394","18_02_2022__20_59_02"
"abwrcvsudltqohip","2022-02-18T19:42:02.250Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","2.92335087268994","18_02_2022__20_59_02"
"alfonwbsjhvctmyg","2022-02-18T19:42:01.508Z","labosfecrpuztmny","eksperiment","DATA_1","1.14764599124586","18_02_2022__20_59_02"
"cxbegyukldqfizha","2022-02-18T19:42:20.734Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","2.27792749275436","18_02_2022__20_59_02"
"hpabfixmsokegqjt","2022-02-18T19:42:25.510Z","gaitzbxocvshrdly","eksperiment","DATA_1","4.8711943793911","18_02_2022__20_59_02"
"kwjusevdprimnhlq","2022-02-18T19:42:26.867Z","gaitzbxocvshrdly","eksperiment","DATA_1","5.36299765807963","18_02_2022__20_59_02"
"fqwznphsimybradg","2022-02-18T19:42:39.673Z","labosfecrpuztmny","eksperiment","DATA_1","0.583898259848404","18_02_2022__20_59_02"
"uxgjfbadtwlcerhm","2022-02-18T19:42:40.743Z","odrvxgtmcuwlejny","eksperiment","DATA_1","3.05734903152298","18_02_2022__20_59_02"
"sjvtqiahrmubnfey","2022-02-18T19:42:43.482Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","2.64670495379877","18_02_2022__20_59_02"
"mtgckbfuonvilsqw","2022-02-18T19:42:44.848Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","6.96488294314381","18_02_2022__20_59_02"
"cazrtlxufhwbsqne","2022-02-18T19:42:45.340Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","2.34888347022587","18_02_2022__20_59_02"
"pxfcknbrjtozqdyi","2022-02-18T19:42:48.829Z","gaitzbxocvshrdly","eksperiment","DATA_1","4.26229508196721","18_02_2022__20_59_02"
"manrkglobcqxydvt","2022-02-18T19:42:48.820Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","0.426829268292683","18_02_2022__20_59_02"
"cexrmipsvbqfdkuw","2022-02-18T19:42:49.714Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","2.32121085728953","18_02_2022__20_59_02"
"emzxnphybasgtcrd","2022-02-18T19:42:50.435Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","1.23658921035237","18_02_2022__20_59_02"
"coyxrtknhzbsdmea","2022-02-18T19:42:50.332Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","1.91751155030801","18_02_2022__20_59_02"
"tiklzpxayubvoqjc","2022-02-18T19:42:53.416Z","cdfzjubmvhynkola","eksperiment","DATA_1","0.935933022922636","18_02_2022__20_59_02"
"kxrnsaebqzucgwyj","2022-02-18T19:42:56.033Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","1.09358957905544","18_02_2022__20_59_02"
"xkowadvnbpeqlguz","2022-02-18T19:42:58.384Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","5.05852842809365","18_02_2022__20_59_02"
"sdhkprxaiylnjobq","2022-02-18T19:43:59.151Z","endbhjqtsymilzwa","eksperiment","DATA_1","0.645526613816535","18_02_2022__20_59_02"
"abcdfihmegknjplo","2022-02-18T19:43:00.379Z","adbkcjeilognfmhp","eksperiment","DATA_1","0.069589422407794","18_02_2022__20_59_02"
"forwmtayizpbjhcs","2022-02-18T19:43:06.210Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","0.0866495507060334","18_02_2022__20_59_02"
"evuzajfmyxwtqghr","2022-02-18T19:43:10.786Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","0.781003711801495","18_02_2022__20_59_02"
"sekjaufqhvzlxydg","2022-02-18T19:43:09.754Z","labosfecrpuztmny","eksperiment","DATA_1","1.61304313013772","18_02_2022__20_59_02"
"ldgftabuwoyjevpc","2022-02-18T19:43:11.403Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","2.60033444816054","18_02_2022__20_59_02"
"pavbwlmfdyoicthg","2022-02-18T19:43:14.553Z","labosfecrpuztmny","eksperiment","DATA_1","3.31269349845201","18_02_2022__20_59_02"
"votksyzrqxwupeig","2022-02-18T19:43:26.141Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","0","18_02_2022__20_59_02"
"dvurxfngapsibtmh","2022-02-18T19:43:26.771Z","labosfecrpuztmny","eksperiment","DATA_1","3.84641560798548","18_02_2022__20_59_02"
"lwgkqtehcjirbfya","2022-02-18T19:43:38.191Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","0.555198973042362","18_02_2022__20_59_02"
"mahjsuieqldtgkxb","2022-02-18T19:43:47.569Z","labosfecrpuztmny","eksperiment","DATA_1","3.32543770684317","18_02_2022__20_59_02"
"bfvyklcuazqrmwjs","2022-02-18T19:43:51.968Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","1.88903683264887","18_02_2022__20_59_02"
"drhixlaesnybzgcp","2022-02-18T19:43:52.426Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","1.62482353696099","18_02_2022__20_59_02"
"okmuwsndibhegzpc","2022-02-18T19:43:53.170Z","labosfecrpuztmny","eksperiment","DATA_1","3.29981584285257","18_02_2022__20_59_02"
"aflbutysrhzimpqg","2022-02-18T19:43:54.398Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","0.939745893223819","18_02_2022__20_59_02"
"agbshjurkfeycodw","2022-02-18T19:43:55.193Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","1.40568852669405","18_02_2022__20_59_02"
"xznabmcldspevwuj","2022-02-18T19:43:56.279Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","0.769230769230769","18_02_2022__20_59_02"
"idaykpmtrobnlxze","2022-02-18T19:43:57.644Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","0.697561823418413","18_02_2022__20_59_02"
"apbmtvcqodrwxjus","2022-02-18T19:43:59.603Z","gaitzbxocvshrdly","eksperiment","DATA_1","3.87587822014052","18_02_2022__20_59_02"
"hogtrpifelvdycbs","2022-02-18T19:43:58.457Z","hptaykbxgofzuien","eksperiment","DATA_1","0.0840755528255528","18_02_2022__20_59_02"
"cwuekqmtvyjdspzh","2022-02-18T19:44:02.710Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","1.40095610882957","18_02_2022__20_59_02"
"xtickflzdbohqypj","2022-02-18T19:44:03.245Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","1.13545944558522","18_02_2022__20_59_02"
"kibdjacflpnhgmeo","2022-02-18T19:44:03.690Z","adbkcjeilognfmhp","eksperiment","DATA_1","0","18_02_2022__20_59_02"
"xpeabmcqzrdtnohk","2022-02-18T19:44:05.192Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","0.953301463039014","18_02_2022__20_59_02"
"djkaexrnzlhtyoiq","2022-02-18T19:44:11.203Z","labosfecrpuztmny","eksperiment","DATA_1","2.87278477634248","18_02_2022__20_59_02"
"daijkfoqwytsrvhb","2022-02-18T19:44:28.767Z","odrvxgtmcuwlejny","eksperiment","DATA_1","2.16851025446259","18_02_2022__20_59_02"
"asbfnockurpwdqth","2022-02-18T19:44:32.422Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","0.317715019255456","18_02_2022__20_59_02"
"acbikdfghejlomnp","2022-02-18T19:44:34.479Z","bacdgehfjkilnmpo","eksperiment","DATA_1","1.59806295399516","18_02_2022__20_59_02"
"rtsczbqyavudxwgf","2022-02-18T19:44:39.596Z","bacdgehfjkilnmpo","eksperiment","DATA_1","2.05811138014528","18_02_2022__20_59_02"
"dghaeklmzcoiupyw","2022-02-18T19:44:46.816Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","0.00962772785622593","18_02_2022__20_59_02"
"fnxclwpykqbgvohj","2022-02-18T19:44:46.248Z","labosfecrpuztmny","eksperiment","DATA_1","2.39457670545532","18_02_2022__20_59_02"
"fwjalxigkrdzqcsb","2022-02-18T19:44:55.456Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","0.812050821355236","18_02_2022__20_59_02"
"kyuvdbnolgxrjeta","2022-02-18T19:44:56.467Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","0.633823151950719","18_02_2022__20_59_02"
"hkscqzwtejfybxnu","2022-02-18T19:44:56.875Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","0.906538757700205","18_02_2022__20_59_02"
"bgviahtdlkxsejcy","2022-02-18T19:44:58.926Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","0.439666238767651","18_02_2022__20_59_02"
"kjmlaqdbiwzcfeyt","2022-02-18T19:45:01.322Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","4.36454849498328","18_02_2022__20_59_02"
"gtsfpaqibmrjunxy","2022-02-18T19:45:02.695Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","0.0994865211810013","18_02_2022__20_59_02"
"abkicomdeuyrxwfg","2022-02-18T19:45:05.598Z","labosfecrpuztmny","eksperiment","DATA_1","1.70271965410484","18_02_2022__20_59_02"
"ofgdatjpvsubwiqx","2022-02-18T19:45:08.196Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","0.00641848523748395","18_02_2022__20_59_02"
"pjyutzalemifobks","2022-02-18T19:45:06.397Z","labosfecrpuztmny","eksperiment","DATA_1","1.75403010569019","18_02_2022__20_59_02"
"djvtoxcfmqpszrnh","2022-02-18T19:45:07.726Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","0.359531772575251","18_02_2022__20_59_02"
"hdglftvjzcwkxsub","2022-02-18T19:45:16.350Z","labosfecrpuztmny","eksperiment","DATA_1","0.981103875306929","18_02_2022__20_59_02"
"dprafbmqneugiwty","2022-02-18T19:45:28.864Z","fynegbqitazohkwm","eksperiment","DATA_1","2.45382585751979","18_02_2022__20_59_02"
"talqonkgbjxzipfr","2022-02-18T19:45:34.825Z","gaitzbxocvshrdly","eksperiment","DATA_1","2.97423887587822","18_02_2022__20_59_02"
"dpaoeqjliyuhsgbx","2022-02-18T19:45:36.061Z","gaitzbxocvshrdly","eksperiment","DATA_1","2.57611241217799","18_02_2022__20_59_02"
"ajblexyntcdqsuki","2022-02-18T19:46:37.779Z","endbhjqtsymilzwa","eksperiment","DATA_1","0.237825594563986","18_02_2022__20_59_02"
"uadbxcpvfnihgjmz","2022-02-18T19:46:39.955Z","endbhjqtsymilzwa","eksperiment","DATA_1","0","18_02_2022__20_59_02"
"mlupxwbzvnrqcfhi","2022-02-18T19:45:41.573Z","ozehytcbwnxiqsga","eksperiment","DATA_1","0.224019654386631","18_02_2022__20_59_02"
"wunricvpmxdfszky","2022-02-18T19:45:57.824Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","2.36275988193018","18_02_2022__20_59_02"
"aulbhpjfztycexdk","2022-02-18T19:45:58.478Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","1.07610369609856","18_02_2022__20_59_02"
"dzbrpuhkgvyfminj","2022-02-18T19:45:59.524Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","2.63860369609856","18_02_2022__20_59_02"
"fltdnzqrkvhueayo","2022-02-18T19:45:59.555Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","3.19397993311037","18_02_2022__20_59_02"
"arfisqdmthonwgpj","2022-02-18T19:46:00.304Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","4.78260869565217","18_02_2022__20_59_02"
"wbavksexfduntmjc","2022-02-18T19:46:00.741Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","2.8778715349076","18_02_2022__20_59_02"
"placfhrijvgsqtod","2022-02-18T19:46:02.357Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","2.37591439938398","18_02_2022__20_59_02"
"eidtpwqkyxuclnfs","2022-02-18T19:46:04.872Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","1.73206493839836","18_02_2022__20_59_02"
"gbtjhzvyrikqloae","2022-02-18T19:46:14.412Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","1.78436216632444","18_02_2022__20_59_02"
"wotcbijsrypdeqnu","2022-02-18T19:46:14.095Z","labosfecrpuztmny","eksperiment","DATA_1","0.630871677164514","18_02_2022__20_59_02"
"qtsnrvekafwhxuyz","2022-02-18T19:46:16.907Z","adbkcjeilognfmhp","eksperiment","DATA_1","3.85525400139179","18_02_2022__20_59_02"
"xenpdiurjhtlqmfc","2022-02-18T19:46:17.246Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","1.22505454312115","18_02_2022__20_59_02"
"exvfihcmqyndtslb","2022-02-18T19:46:26.477Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","0.516688061617458","18_02_2022__20_59_02"
"csorungyvwkbzleh","2022-02-18T19:46:29.708Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","1.21494802361396","18_02_2022__20_59_02"
"wkizbgaxhfocvedm","2022-02-18T19:46:30.173Z","cdfzjubmvhynkola","eksperiment","DATA_1","1.82097659980898","18_02_2022__20_59_02"
"dbzxnkeachvqurjl","2022-02-18T19:46:31.079Z","cdfzjubmvhynkola","eksperiment","DATA_1","2.08795964660936","18_02_2022__20_59_02"
"jydnzkmicubtoapf","2022-02-18T19:46:31.560Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","1.62709106625311","18_02_2022__20_59_02"
"fhlrdoeznxjsmyaq","2022-02-18T19:46:32.458Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","1.02107931211499","18_02_2022__20_59_02"
"kdyoctuimqljwegn","2022-02-18T19:46:41.950Z","ozehytcbwnxiqsga","eksperiment","DATA_1","5.48423851120395","18_02_2022__20_59_02"
"pawkqhobusvxcgyd","2022-02-18T19:46:43.390Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","2.64742684804928","18_02_2022__20_59_02"
"ihjgfultkzoqvmew","2022-02-18T19:46:45.645Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","0.789473684210526","18_02_2022__20_59_02"
"amkfytvdnegzplxb","2022-02-18T19:46:47.681Z","ozehytcbwnxiqsga","eksperiment","DATA_1","9.19483478921383","18_02_2022__20_59_02"
"oafjrwbpedvizkhu","2022-02-18T19:46:55.675Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","0.567088039014374","18_02_2022__20_59_02"
"mcagjfntvqorypbl","2022-02-18T19:47:01.341Z","labosfecrpuztmny","eksperiment","DATA_1","0.438707697234974","18_02_2022__20_59_02"
"wdmnhlykbsrqpcie","2022-02-18T19:47:07.357Z","labosfecrpuztmny","eksperiment","DATA_1","0","18_02_2022__20_59_02"
"crmwtqhdfpyjgoiv","2022-02-18T19:47:15.732Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","1.38639281129653","18_02_2022__20_59_02"
"stdeprziyqcbwfuk","2022-02-18T19:47:23.690Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","3.25418213250623","18_02_2022__20_59_02"
"abcmtgysopdvnehk","2022-02-18T19:47:29.375Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","3.77926421404682","18_02_2022__20_59_02"
"btdsypqzueixagjc","2022-02-18T19:47:43.343Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","2.61705685618729","18_02_2022__20_59_02"
"dnvkfsphwaetxqry","2022-02-18T19:47:44.862Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","1.80359435173299","18_02_2022__20_59_02"
"zpsfygktriejqwuo","2022-02-18T19:48:04.470Z","zdycstrwaqbvuoxh","eksperiment","DATA_1","1.82234199420349","18_02_2022__20_59_02"
"xabwfkzpeshclnyo","2022-02-18T19:48:08.438Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","2.24646983311938","18_02_2022__20_59_02"
"ejzsyltdfhpcibom","2022-02-18T19:48:07.711Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","6.90287019565002","18_02_2022__20_59_02"
"knmgcibqdzyjhfwl","2022-02-18T19:48:08.472Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","6.91876055218989","18_02_2022__20_59_02"
"adbchgefwuirjvlt","2022-02-18T19:48:11.689Z","bacdgehfjkilnmpo","eksperiment","DATA_1","2.64729620661824","18_02_2022__20_59_02"
"laxvosubezfrpiqc","2022-02-18T19:48:12.951Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","0.373540169404518","18_02_2022__20_59_02"
"suycqifvkopdwtnl","2022-02-18T19:48:14.149Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","0.718445200205339","18_02_2022__20_59_02"
"avwclufztjbdrpys","2022-02-18T19:48:16.382Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","2.48572253593429","18_02_2022__20_59_02"
"saqdgkitjunhoewp","2022-02-18T19:48:31.767Z","gaitzbxocvshrdly","eksperiment","DATA_1","5.29274004683841","18_02_2022__20_59_02"
"ydjkntrbwfsaqpel","2022-02-18T19:48:31.635Z","labosfecrpuztmny","eksperiment","DATA_1","0.95114497704708","18_02_2022__20_59_02"
"whempcifbqugoavt","2022-02-18T19:48:32.935Z","labosfecrpuztmny","eksperiment","DATA_1","1.44650101419878","18_02_2022__20_59_02"
"xuoamrelikvtqgzd","2022-02-18T19:48:38.024Z",""kmdslwyuaitnqebg"","eksperiment","DATA_1","6.50561128215314","18_02_2022__20_59_02"
"gcylxqfwnpiuzvos","2022-02-18T19:48:39.839Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","3.31193838254172","18_02_2022__20_59_02"
"dhmrtnjbxcvikpya","2022-02-18T19:48:43.852Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","2.74247491638796","18_02_2022__20_59_02"
"vahdpxlobziqnrky","2022-02-18T19:48:44.429Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","3.46637577002053","18_02_2022__20_59_02"
"hysuctdgxewjobpa","2022-02-18T19:48:44.890Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","3.99665551839465","18_02_2022__20_59_02"
"ofdhrwysncaliqve","2022-02-18T19:49:00.914Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","3.82541720154044","18_02_2022__20_59_02"
"lzpdafbmwgrquyht","2022-02-18T19:49:01.672Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","1.25513347022587","18_02_2022__20_59_02"
"wjxfabhcyzpdvuqs","2022-02-18T19:49:03.032Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","1.49191478439425","18_02_2022__20_59_02"
"awxdvfzysmnblujo","2022-02-18T19:49:14.594Z","cdfzjubmvhynkola","eksperiment","DATA_1","4.18181411174785","18_02_2022__20_59_02"
"dynawjzbpmrftoul","2022-02-18T19:49:16.112Z","cdfzjubmvhynkola","eksperiment","DATA_1","5.94891654727794","18_02_2022__20_59_02"
"rwuyxefgbzacdhij","2022-02-18T19:49:28.685Z","bacdgehfjkilnmpo","eksperiment","DATA_1","3.43018563357546","18_02_2022__20_59_02"
"yziqosnprmtbxuad","2022-02-18T19:49:34.530Z","bacdgehfjkilnmpo","eksperiment","DATA_1","4.06779661016949","18_02_2022__20_59_02"
"ermhndqpwocjilbz","2022-02-18T19:49:39.348Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","4.65661103979461","18_02_2022__20_59_02"
"ognvsldyqktfjric","2022-02-18T19:50:00.942Z","lowxrabiqgjvhnkc","eksperiment","DATA_1","5.55198973042362","18_02_2022__20_59_02"
"yklzednoimhurfvc","2022-02-18T19:50:12.237Z","jczrsdbkxutmvwaq","eksperiment","DATA_1","3.00612808008214","18_02_2022__20_59_02"
"zgsxemlntjqiodwk","2022-02-18T19:50:13.441Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","6.47157190635452","18_02_2022__20_59_02"
"idmajsyefwnrbcqu","2022-02-18T19:50:21.265Z","ghcbpfqlzsdixntw","eksperiment","DATA_1","1.01257700205339","18_02_2022__20_59_02"
"rubswkhfdgnyqomj","2022-02-18T19:50:44.490Z","alpjhrzgomxfnbuq","eksperiment","DATA_1","1.02042383292383","18_02_2022__20_59_02"
"fhutrkmyabspxocg","2022-02-18T19:50:48.523Z","gaitzbxocvshrdly","eksperiment","DATA_1","7.08430913348946","18_02_2022__20_59_02"
"hktajglberzcupvo","2022-02-18T19:51:00.712Z","labosfecrpuztmny","eksperiment","DATA_1","1.19882299562293","18_02_2022__20_59_02"
"atylszbkjrewvhcp","2022-02-18T19:51:12.221Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","4.2809364548495","18_02_2022__20_59_02"
"nocafihltukwxdrj","2022-02-18T19:51:43.814Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","7.86789297658863","18_02_2022__20_59_02"
"nalrbmyeiqvjcuds","2022-02-18T19:51:44.974Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","9.42307692307692","18_02_2022__20_59_02"
"kxclbfvqtsndyoge","2022-02-18T19:51:51.243Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","1.73913043478261","18_02_2022__20_59_02"
"ryxsnauhltqodegc","2022-02-18T19:52:11.317Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","6.12876254180602","18_02_2022__20_59_02"
"iouhabrtflcsqejn","2022-02-18T19:52:11.979Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","8.33612040133779","18_02_2022__20_59_02"
"kuqnbsdmilcptajv","2022-02-18T19:52:14.542Z","qtbcgdrfsewahulj","eksperiment","DATA_1","1.82160804020101","18_02_2022__20_59_02"
"rkscqitabdjlenug","2022-02-18T19:52:15.213Z","qtbcgdrfsewahulj","eksperiment","DATA_1","2.39949748743719","18_02_2022__20_59_02"
"ubzcdareywfsgvqh","2022-02-18T19:52:19.394Z","qtbcgdrfsewahulj","eksperiment","DATA_1","3.69765494137353","18_02_2022__20_59_02"
"hfkeqnrubwmapgxl","2022-02-18T19:52:17.953Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","0","18_02_2022__20_59_02"
"kzauqotvhiybrcnm","2022-02-18T19:52:18.631Z","vpgcbsmdlzytnjoq","eksperiment","DATA_1","0.20066889632107","18_02_2022__20_59_02"
"utbdhfpcxnmazrgl","2022-02-18T19:54:28.185Z","cdfzjubmvhynkola","eksperiment","DATA_1","3.9352017669532","18_02_2022__20_59_02"`;

const csv = `id,datetime,channel,type,value,captureId
"zvwx8t99kchmnox8","2022-06-03T08:36:20.507Z","liisi-tuba","DATA_1","4.22536599099099","03_06_2022__11_36_16"
"9wix5dmk2l3b4d8a","2022-06-03T08:36:25.595Z","liisi-tuba","DATA_1","2.6138795045045","03_06_2022__11_36_16"
"1ywkdfx0wx74ak4v","2022-06-03T08:36:27.554Z","liisi-tuba","DATA_1","1.01041666666667","03_06_2022__11_36_16"
"v7872yktq57230b8","2022-06-03T08:36:29.440Z","liisi-tuba","DATA_1","3.52210022522523","03_06_2022__11_36_16"
"t6mu5tnw8kg8o12e","2022-06-03T08:36:30.550Z","liisi-tuba","DATA_1","4.33291103603604","03_06_2022__11_36_16"
"u2hsazji2q2w7h64","2022-06-03T08:36:31.755Z","liisi-tuba","DATA_1","5.72691441441442","03_06_2022__11_36_16"
"3d9otgr0lb8t62hz","2022-06-03T08:36:32.845Z","liisi-tuba","DATA_1","7.05053490990991","03_06_2022__11_36_16"
"tabyga1bchbriih5","2022-06-03T08:36:33.871Z","liisi-tuba","DATA_1","7.97339527027027","03_06_2022__11_36_16"
"8z363z44orxsiaht","2022-06-03T08:36:34.796Z","liisi-tuba","DATA_1","8.98043355855856","03_06_2022__11_36_16"
"r9y1ha1lp9s0kgla","2022-06-03T08:36:36.037Z","liisi-tuba","DATA_1","9.48902027027027","03_06_2022__11_36_16"
"i97s1rhvpwlt5nit","2022-06-03T08:36:37.279Z","liisi-tuba","DATA_1","7.6307713963964","03_06_2022__11_36_16"
"xiyfvffz6skyruck","2022-06-03T08:36:38.409Z","liisi-tuba","DATA_1","6.45115427927928","03_06_2022__11_36_16"
"i7dyt9ocarserc8i","2022-06-03T08:36:39.296Z","liisi-tuba","DATA_1","7.79926801801802","03_06_2022__11_36_16"
"i4odh7d1j99g9put","2022-06-03T08:36:40.412Z","liisi-tuba","DATA_1","8.39372184684685","03_06_2022__11_36_16"
"i8y7ohqenakycpoz","2022-06-03T08:36:41.520Z","liisi-tuba","DATA_1","9.05503941441441","03_06_2022__11_36_16"
"wiz7n57kitrch04g","2022-06-03T08:36:42.511Z","liisi-tuba","DATA_1","9.83614864864865","03_06_2022__11_36_16"
"f7sfhosgzrxj9mtc","2022-06-03T08:36:43.822Z","liisi-tuba","DATA_1","10","03_06_2022__11_36_16"
"g6bbpmdwm8ci0xk2","2022-06-03T08:36:46.300Z","liisi-tuba","DATA_1","1.9995777027027","03_06_2022__11_36_16"
"xcggv6ql3j75r1gz","2022-06-03T08:36:47.989Z","liisi-tuba","DATA_1","0.891891891891892","03_06_2022__11_36_16"
"esq1jqb9i3v19zco","2022-06-03T08:36:51.495Z","liisi-tuba","DATA_1","0.548564189189189","03_06_2022__11_36_16"
"9emu6n440n8ep42u","2022-06-03T08:36:52.295Z","liisi-tuba","DATA_1","0.18482545045045","03_06_2022__11_36_16"
"844z7q21o9tt4sxz","2022-06-03T08:36:53.073Z","liisi-tuba","DATA_1","0","03_06_2022__11_36_16"
"uwwmoise157wvf1t","2022-06-03T08:36:56.823Z","liisi-tuba","DATA_1","9.42173423423424","03_06_2022__11_36_16"
"8sal3iniayr4bu6k","2022-06-03T08:36:57.970Z","liisi-tuba","DATA_1","9.8548704954955","03_06_2022__11_36_16"
"2q7dkwpv4hrd4dgn","2022-06-03T08:36:59.104Z","liisi-tuba","DATA_1","10","03_06_2022__11_36_16"
"kb2hg2kg62ur2vgz","2022-06-03T08:37:00.304Z","liisi-tuba","DATA_1","9.60275900900901","03_06_2022__11_36_16"
"yxfnkfuba6av6zsx","2022-06-03T08:37:01.078Z","liisi-tuba","DATA_1","10","03_06_2022__11_36_16"
"7w6sfuo86oxo5gsb","2022-06-03T08:37:02.379Z","liisi-tuba","DATA_1","10","03_06_2022__11_36_16"
"nt081190obeg9rro","2022-06-03T08:37:07.399Z","liisi-tuba","DATA_1","9.61317567567568","03_06_2022__11_36_16"
"pokiv6j04ocmadqy","2022-06-03T08:37:08.206Z","liisi-tuba","DATA_1","9.27533783783784","03_06_2022__11_36_16"
"04buliumxb13ya7r","2022-06-03T08:37:08.961Z","liisi-tuba","DATA_1","9.0361768018018","03_06_2022__11_36_16"
"vno24oz821jf2tg1","2022-06-03T08:37:09.709Z","liisi-tuba","DATA_1","8.45016891891892","03_06_2022__11_36_16"
"68fcpcykgr7imbub","2022-06-03T08:37:10.237Z","liisi-tuba","DATA_1","7.97269144144144","03_06_2022__11_36_16"
"fg76jpalv5m2vqs0","2022-06-03T08:37:10.789Z","liisi-tuba","DATA_1","7.57404279279279","03_06_2022__11_36_16"
"sxpptpico7awqmsp","2022-06-03T08:37:11.430Z","liisi-tuba","DATA_1","8.06376689189189","03_06_2022__11_36_16"
"au71tj5xakwttkca","2022-06-03T08:37:12.017Z","liisi-tuba","DATA_1","8.4481981981982","03_06_2022__11_36_16"
"9em4hfisc8i5csck","2022-06-03T08:37:12.578Z","liisi-tuba","DATA_1","8.78125","03_06_2022__11_36_16"
"8ketz677rnv28pl4","2022-06-03T08:37:13.131Z","liisi-tuba","DATA_1","9.11641328828829","03_06_2022__11_36_16"
"r96u7k0vuw8ewuc0","2022-06-03T08:37:13.649Z","liisi-tuba","DATA_1","9.38189752252252","03_06_2022__11_36_16"
"n43uczx2nnxgk4j6","2022-06-03T08:37:14.203Z","liisi-tuba","DATA_1","9.71607545045045","03_06_2022__11_36_16"
"x0l68pu36dmeej24","2022-06-03T08:37:14.710Z","liisi-tuba","DATA_1","10","03_06_2022__11_36_16"
"mrpu1qa8jest6t34","2022-06-03T08:37:15.738Z","liisi-tuba","DATA_1","9.77801238738739","03_06_2022__11_36_16"
"d9n8ctuohf8bthv0","2022-06-03T08:37:16.306Z","liisi-tuba","DATA_1","9.36007882882883","03_06_2022__11_36_16"
"tuon1gg5z90bpvxc","2022-06-03T08:37:16.883Z","liisi-tuba","DATA_1","8.95073198198198","03_06_2022__11_36_16"
"070na9rjl811l7w4","2022-06-03T08:37:17.695Z","liisi-tuba","DATA_1","9.68229166666667","03_06_2022__11_36_16"
"a8mjjl57p68vi6yr","2022-06-03T08:37:18.253Z","liisi-tuba","DATA_1","9.94087837837838","03_06_2022__11_36_16"`;
export const data = csvParse(csv);

export const sliderData = [
  {
    id: "6qspg35knftpzjsh",
    datetime: "2022-06-10T09:36:27.960Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "2.53726949120788",
    userId: "rcoj5m4y78kd94w5o2yp57h9l3tpfbf8fctt",
    userName: "kika",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "y6vtxeq9h33evid5",
    datetime: "2022-06-10T09:36:28.992Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "2.95439338382892",
    userId: "rcoj5m4y78kd94w5o2yp57h9l3tpfbf8fctt",
    userName: "kika",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "gk6qhl3uiodyksdm",
    datetime: "2022-06-10T09:36:30.032Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "3.30313411663946",
    userId: "rcoj5m4y78kd94w5o2yp57h9l3tpfbf8fctt",
    userName: "kika",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "45x6rca93vzxq44r",
    datetime: "2022-06-10T09:36:30.963Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "3.60865026898268",
    userId: "rcoj5m4y78kd94w5o2yp57h9l3tpfbf8fctt",
    userName: "kika",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "4qqg397l2l8a0317",
    datetime: "2022-06-10T09:36:31.825Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "3.97545700291733",
    userId: "rcoj5m4y78kd94w5o2yp57h9l3tpfbf8fctt",
    userName: "kika",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "hb8o0t082v1g88iw",
    datetime: "2022-06-10T09:36:32.728Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "4.17980354896555",
    userId: "rcoj5m4y78kd94w5o2yp57h9l3tpfbf8fctt",
    userName: "kika",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "l0s3gpv1gz84f5df",
    datetime: "2022-06-10T09:36:33.439Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "4.52519872601237",
    userId: "rcoj5m4y78kd94w5o2yp57h9l3tpfbf8fctt",
    userName: "kika",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "vijevkxyl7t93h1p",
    datetime: "2022-06-10T09:36:34.138Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "4.87086154752027",
    userId: "rcoj5m4y78kd94w5o2yp57h9l3tpfbf8fctt",
    userName: "kika",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "zodnw6anm718j8yr",
    datetime: "2022-06-10T09:36:43.040Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "4.65580922302813",
    userId: "rcoj5m4y78kd94w5o2yp57h9l3tpfbf8fctt",
    userName: "kika",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "llok80zbhvoaeuya",
    datetime: "2022-06-10T09:36:43.791Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "4.44343334314696",
    userId: "rcoj5m4y78kd94w5o2yp57h9l3tpfbf8fctt",
    userName: "kika",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "a8cdmwvfilsvrp73",
    datetime: "2022-06-10T09:36:44.695Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "4.25246902015363",
    userId: "rcoj5m4y78kd94w5o2yp57h9l3tpfbf8fctt",
    userName: "kika",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "erhs6o5d1tljgtfo",
    datetime: "2022-06-10T09:36:45.493Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "4.0095816717073",
    userId: "rcoj5m4y78kd94w5o2yp57h9l3tpfbf8fctt",
    userName: "kika",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "5dky8wmyzlr3n3ld",
    datetime: "2022-06-10T09:36:46.309Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "3.55967133260177",
    userId: "rcoj5m4y78kd94w5o2yp57h9l3tpfbf8fctt",
    userName: "kika",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "h4xoson5w77ipht7",
    datetime: "2022-06-10T09:36:47.193Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "3.278644648449",
    userId: "rcoj5m4y78kd94w5o2yp57h9l3tpfbf8fctt",
    userName: "kika",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "aqhzgpjul012eqc8",
    datetime: "2022-06-10T09:36:48.024Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "2.91839520381126",
    userId: "rcoj5m4y78kd94w5o2yp57h9l3tpfbf8fctt",
    userName: "kika",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "p20k5zhuq16stenf",
    datetime: "2022-06-10T09:36:48.782Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "2.65998447662126",
    userId: "rcoj5m4y78kd94w5o2yp57h9l3tpfbf8fctt",
    userName: "kika",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "5r8f009wtcmu2phw",
    datetime: "2022-06-10T09:36:49.676Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "2.43757192944892",
    userId: "rcoj5m4y78kd94w5o2yp57h9l3tpfbf8fctt",
    userName: "kika",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "gqepbpddgqn5jdr3",
    datetime: "2022-06-10T09:36:50.426Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "2.25008698444986",
    userId: "rcoj5m4y78kd94w5o2yp57h9l3tpfbf8fctt",
    userName: "kika",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "0aadkvk29o3dr8cq",
    datetime: "2022-06-10T09:36:51.208Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "2.10381928645987",
    userId: "rcoj5m4y78kd94w5o2yp57h9l3tpfbf8fctt",
    userName: "kika",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "xyydnpmpwyg2n92b",
    datetime: "2022-06-10T09:36:52.248Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "2.03463319326607",
    userId: "rcoj5m4y78kd94w5o2yp57h9l3tpfbf8fctt",
    userName: "kika",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "89t2esk0ef59x28v",
    datetime: "2022-06-10T09:36:53.292Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "1.85196584856676",
    userId: "rcoj5m4y78kd94w5o2yp57h9l3tpfbf8fctt",
    userName: "kika",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "ub8xk5ykcbq4gjof",
    datetime: "2022-06-10T09:37:02.543Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "2.2064609372909",
    userId: "fvrf69csniracllffn4s8ruymqqqvpmozhgz",
    userName: "Appreciated Opossum",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "qe55ij6gcqgi9ucj",
    datetime: "2022-06-10T09:37:03.875Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "2.34108610122314",
    userId: "fvrf69csniracllffn4s8ruymqqqvpmozhgz",
    userName: "Appreciated Opossum",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "r4e3lou90am880eq",
    datetime: "2022-06-10T09:37:04.844Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "2.43770575167947",
    userId: "fvrf69csniracllffn4s8ruymqqqvpmozhgz",
    userName: "Appreciated Opossum",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "w1tijlqb734xae9d",
    datetime: "2022-06-10T09:37:05.607Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "2.61140700693199",
    userId: "fvrf69csniracllffn4s8ruymqqqvpmozhgz",
    userName: "Appreciated Opossum",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "a7o8wz8pdd8hdeyd",
    datetime: "2022-06-10T09:37:06.439Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "2.71632363568236",
    userId: "fvrf69csniracllffn4s8ruymqqqvpmozhgz",
    userName: "Appreciated Opossum",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "qgewm2nm6ix4holy",
    datetime: "2022-06-10T09:37:07.193Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "2.83448866525707",
    userId: "fvrf69csniracllffn4s8ruymqqqvpmozhgz",
    userName: "Appreciated Opossum",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "jb409sna3w4n8vip",
    datetime: "2022-06-10T09:37:07.891Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "2.94609640553489",
    userId: "fvrf69csniracllffn4s8ruymqqqvpmozhgz",
    userName: "Appreciated Opossum",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "dyngzi60fmj678e0",
    datetime: "2022-06-10T09:37:08.813Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "3.06131734603752",
    userId: "fvrf69csniracllffn4s8ruymqqqvpmozhgz",
    userName: "Appreciated Opossum",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "2y2ki98l1obsgji4",
    datetime: "2022-06-10T09:37:09.556Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "3.19125873190054",
    userId: "fvrf69csniracllffn4s8ruymqqqvpmozhgz",
    userName: "Appreciated Opossum",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "t7c9h1yef58jz0s6",
    datetime: "2022-06-10T09:37:09.888Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "3.271819714691",
    userId: "fvrf69csniracllffn4s8ruymqqqvpmozhgz",
    userName: "Appreciated Opossum",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "4xy29iks6i128kor",
    datetime: "2022-06-10T09:37:10.709Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "3.05663356796831",
    userId: "fvrf69csniracllffn4s8ruymqqqvpmozhgz",
    userName: "Appreciated Opossum",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "ajv1ob56fb08irqe",
    datetime: "2022-06-10T09:37:11.797Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "2.87597355672724",
    userId: "fvrf69csniracllffn4s8ruymqqqvpmozhgz",
    userName: "Appreciated Opossum",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "b76zq2lmbfvh004e",
    datetime: "2022-06-10T09:37:12.578Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "2.75004683778069",
    userId: "fvrf69csniracllffn4s8ruymqqqvpmozhgz",
    userName: "Appreciated Opossum",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "0wb364xi45d4wyfj",
    datetime: "2022-06-10T09:37:13.489Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "2.63643176404464",
    userId: "fvrf69csniracllffn4s8ruymqqqvpmozhgz",
    userName: "Appreciated Opossum",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "ghvqmd4u5ogo77t2",
    datetime: "2022-06-10T09:37:14.341Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "2.46634370901694",
    userId: "fvrf69csniracllffn4s8ruymqqqvpmozhgz",
    userName: "Appreciated Opossum",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "fnmuu81t2966s2km",
    datetime: "2022-06-10T09:37:15.275Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "2.2824719642427",
    userId: "fvrf69csniracllffn4s8ruymqqqvpmozhgz",
    userName: "Appreciated Opossum",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "w9zpli1z2l1bg0ru",
    datetime: "2022-06-10T09:37:16.157Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "2.12001177635629",
    userId: "fvrf69csniracllffn4s8ruymqqqvpmozhgz",
    userName: "Appreciated Opossum",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "qq2f5t8kzjefg4k3",
    datetime: "2022-06-10T09:37:17.077Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "1.94002087626797",
    userId: "fvrf69csniracllffn4s8ruymqqqvpmozhgz",
    userName: "Appreciated Opossum",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "dhlot9d603yzfbsq",
    datetime: "2022-06-10T09:37:17.944Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "1.76605197655435",
    userId: "fvrf69csniracllffn4s8ruymqqqvpmozhgz",
    userName: "Appreciated Opossum",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "fchvn0l2wpr4murw",
    datetime: "2022-06-10T09:37:19.008Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "1.59020956561304",
    userId: "fvrf69csniracllffn4s8ruymqqqvpmozhgz",
    userName: "Appreciated Opossum",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "dle0k8gnc97094dm",
    datetime: "2022-06-10T09:37:22.043Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "10",
    userId: "rcoj5m4y78kd94w5o2yp57h9l3tpfbf8fctt",
    userName: "kika",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "0w0ybh9rnn5nsj3b",
    datetime: "2022-06-10T09:37:23.506Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "9.80234456547922",
    userId: "rcoj5m4y78kd94w5o2yp57h9l3tpfbf8fctt",
    userName: "kika",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "z1jbjglvqjsjuoo6",
    datetime: "2022-06-10T09:37:24.444Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "9.52827663731499",
    userId: "rcoj5m4y78kd94w5o2yp57h9l3tpfbf8fctt",
    userName: "kika",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "csn8tolsrudp69h4",
    datetime: "2022-06-10T09:37:28.457Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "1.88006851698204",
    userId: "fvrf69csniracllffn4s8ruymqqqvpmozhgz",
    userName: "Appreciated Opossum",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "r14n8dgh6ik91jbx",
    datetime: "2022-06-10T09:37:29.159Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "2.03971843802693",
    userId: "fvrf69csniracllffn4s8ruymqqqvpmozhgz",
    userName: "Appreciated Opossum",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "0fw95b8oc9dnbm25",
    datetime: "2022-06-10T09:37:29.843Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "2.17126569065653",
    userId: "fvrf69csniracllffn4s8ruymqqqvpmozhgz",
    userName: "Appreciated Opossum",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "i9vhs2mvcymf4g2e",
    datetime: "2022-06-10T09:37:30.456Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "2.73947488156733",
    userId: "fvrf69csniracllffn4s8ruymqqqvpmozhgz",
    userName: "Appreciated Opossum",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "e32o88c7sor3g1xp",
    datetime: "2022-06-10T09:37:34.543Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "9.35176511522094",
    userId: "rcoj5m4y78kd94w5o2yp57h9l3tpfbf8fctt",
    userName: "kika",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "qvtjccxc7t7lybab",
    datetime: "2022-06-10T09:37:35.040Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "8.84324063913497",
    userId: "rcoj5m4y78kd94w5o2yp57h9l3tpfbf8fctt",
    userName: "kika",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "zttlsa835w3p1fec",
    datetime: "2022-06-10T09:37:35.539Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "8.53504804218077",
    userId: "rcoj5m4y78kd94w5o2yp57h9l3tpfbf8fctt",
    userName: "kika",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "mjar92w1lpnf7mtr",
    datetime: "2022-06-10T09:37:36.057Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "7.48655086582983",
    userId: "rcoj5m4y78kd94w5o2yp57h9l3tpfbf8fctt",
    userName: "kika",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "jirefiqcu901tddd",
    datetime: "2022-06-10T09:37:36.941Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "6.64253405775768",
    userId: "rcoj5m4y78kd94w5o2yp57h9l3tpfbf8fctt",
    userName: "kika",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "picw903lw4h0ck50",
    datetime: "2022-06-10T09:37:41.995Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "2.78644648449",
    userId: "fvrf69csniracllffn4s8ruymqqqvpmozhgz",
    userName: "Appreciated Opossum",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "3pce7it9xlcovojk",
    datetime: "2022-06-10T09:37:42.474Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "3.3727216765249",
    userId: "fvrf69csniracllffn4s8ruymqqqvpmozhgz",
    userName: "Appreciated Opossum",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "7t2orytyuhk64j6d",
    datetime: "2022-06-10T09:37:42.922Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "3.84926263950968",
    userId: "fvrf69csniracllffn4s8ruymqqqvpmozhgz",
    userName: "Appreciated Opossum",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "2wjuousmpgmxkjwp",
    datetime: "2022-06-10T09:37:43.358Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "4.22075315151353",
    userId: "fvrf69csniracllffn4s8ruymqqqvpmozhgz",
    userName: "Appreciated Opossum",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "0srfwqpa8nl5cwvh",
    datetime: "2022-06-10T09:37:43.840Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "5.00562053368306",
    userId: "fvrf69csniracllffn4s8ruymqqqvpmozhgz",
    userName: "Appreciated Opossum",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "17j9s55xnapuyc6y",
    datetime: "2022-06-10T09:37:45.734Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "6.4443433343147",
    userId: "rcoj5m4y78kd94w5o2yp57h9l3tpfbf8fctt",
    userName: "kika",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "0t0cd4mekfn6abwy",
    datetime: "2022-06-10T09:37:46.222Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "5.96017450418864",
    userId: "rcoj5m4y78kd94w5o2yp57h9l3tpfbf8fctt",
    userName: "kika",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "wgee24ks1lbt8zcc",
    datetime: "2022-06-10T09:37:46.659Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "5.73026791210556",
    userId: "rcoj5m4y78kd94w5o2yp57h9l3tpfbf8fctt",
    userName: "kika",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "phhge9b47nc0tovc",
    datetime: "2022-06-10T09:37:47.139Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "5.12311645210502",
    userId: "rcoj5m4y78kd94w5o2yp57h9l3tpfbf8fctt",
    userName: "kika",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "gk0m40vagrh5trcc",
    datetime: "2022-06-10T09:37:47.600Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "4.81197976607874",
    userId: "rcoj5m4y78kd94w5o2yp57h9l3tpfbf8fctt",
    userName: "kika",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "lccy2tog2dxlhfoe",
    datetime: "2022-06-10T09:37:48.056Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "4.33891818108824",
    userId: "rcoj5m4y78kd94w5o2yp57h9l3tpfbf8fctt",
    userName: "kika",
    captureId: "10_06_2022__12_36_21",
  },
  {
    id: "bgd1z31s9cl46h77",
    datetime: "2022-06-10T09:37:48.485Z",
    channel: "voogteater",
    type: "DATA_1",
    value: "3.86625806278939",
    userId: "rcoj5m4y78kd94w5o2yp57h9l3tpfbf8fctt",
    userName: "kika",
    captureId: "10_06_2022__12_36_21",
  },
];
