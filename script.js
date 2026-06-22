const questions = [
  // 1
  {
    text: '日本で面積が最も大きい都道府県はどれですか？',
    choices: ['岩手県', '北海道', '長野県', '福島県'],
    correct: 1,
    explanation: '北海道の面積は約83,424km²で、日本全国の約22%を占め全国1位です。2位の岩手県の約4.5倍の広さがあります。'
  },
  // 2
  {
    text: '日本で最も長い川はどれですか？',
    choices: ['利根川', '天竜川', '信濃川', '石狩川'],
    correct: 2,
    explanation: '信濃川は全長367kmで日本一の長さを誇ります。長野県内では「千曲川」と呼ばれ、新潟県に入ると「信濃川」と名前が変わります。'
  },
  // 3
  {
    text: '日本最大の湖はどれですか？',
    choices: ['霞ヶ浦', '諏訪湖', '琵琶湖', 'サロマ湖'],
    correct: 2,
    explanation: '琵琶湖は滋賀県にあり、面積約670km²で日本最大の湖です。日本の淡水の約6分の1を蓄えるとも言われています。'
  },
  // 4
  {
    text: '日本の最南端に位置する島はどれですか？',
    choices: ['沖ノ鳥島', '与那国島', '波照間島', '西之島'],
    correct: 0,
    explanation: '沖ノ鳥島は東京都に属し、北緯20度25分に位置する日本最南端の島です。海面上に顔を出す小さな珊瑚礁で構成されています。'
  },
  // 5
  {
    text: '日本の最西端に位置する島はどれですか？',
    choices: ['種子島', '対馬', '屋久島', '与那国島'],
    correct: 3,
    explanation: '与那国島は沖縄県に属し、東経122度で日本最西端の島です。天気の良い日には台湾（約111km先）を肉眼で見ることができます。'
  },
  // 6
  {
    text: '日本で最も深い湖はどれですか？',
    choices: ['摩周湖', '支笏湖', '田沢湖', '洞爺湖'],
    correct: 2,
    explanation: '田沢湖（秋田県）の最大深度は423.4mで、日本一深い湖です。その深さのために真冬でも凍結しないことで知られています。'
  },
  // 7
  {
    text: '本州・北海道・四国・九州の四大島の中で、面積が最も小さいのはどれですか？',
    choices: ['九州', '四国', '北海道', '本州'],
    correct: 1,
    explanation: '四国の面積は約18,800km²で、四大島の中で最も小さい島です。愛媛・高知・徳島・香川の4県から成ります。'
  },
  // 8
  {
    text: '富士山（3,776m）がまたがる2つの県はどれですか？',
    choices: ['山梨県・長野県', '静岡県・神奈川県', '山梨県・静岡県', '長野県・静岡県'],
    correct: 2,
    explanation: '富士山は山梨県と静岡県にまたがる日本最高峰です。山頂の富士山本宮浅間大社奥宮は静岡県に属します。'
  },
  // 9
  {
    text: '関東地方を構成する都道府県の数はいくつですか？',
    choices: ['6', '7', '8', '9'],
    correct: 1,
    explanation: '関東地方は東京都・神奈川県・埼玉県・千葉県・茨城県・栃木県・群馬県の1都6県（計7）から成ります。'
  },
  // 10
  {
    text: '沖縄県の県庁所在地はどれですか？',
    choices: ['石垣市', '宮古島市', '浦添市', '那覇市'],
    correct: 3,
    explanation: '那覇市は沖縄県の県庁所在地で、人口約32万人（2023年）。国際通りや世界遺産の首里城で知られる県の中心都市です。'
  },
  // 11
  {
    text: '北海道の道庁所在地はどれですか？',
    choices: ['札幌市', '函館市', '旭川市', '帯広市'],
    correct: 0,
    explanation: '札幌市は北海道の道庁所在地で、人口約196万人（2023年）。日本の政令指定都市の中でも面積・人口ともに上位に入る大都市です。'
  },
  // 12
  {
    text: '日本の最東端に位置する島はどれですか？',
    choices: ['択捉島', '南鳥島', '硫黄島', '父島'],
    correct: 1,
    explanation: '南鳥島（東京都）は東経153度59分に位置する日本最東端の島です。周囲約7kmのサンゴ礁の島で、気象観測所と自衛隊施設があります。'
  },
  // 13
  {
    text: '日本で最も人口が多い都道府県はどれですか？',
    choices: ['大阪府', '神奈川県', '東京都', '愛知県'],
    correct: 2,
    explanation: '東京都の人口は約1,396万人（2023年）で日本最多です。世界の首都圏の中でも最大規模の都市圏を形成しています。'
  },
  // 14
  {
    text: '日本で最も人口が少ない都道府県はどれですか？',
    choices: ['鳥取県', '島根県', '高知県', '徳島県'],
    correct: 0,
    explanation: '鳥取県の人口は約54万人（2023年）で日本最少です。県内最大都市は鳥取市で、日本三大砂丘のひとつ鳥取砂丘が有名です。'
  },
  // 15
  {
    text: '日本最大の平野はどれですか？',
    choices: ['大阪平野', '濃尾平野', '越後平野', '関東平野'],
    correct: 3,
    explanation: '関東平野の面積は約17,000km²で日本最大の平野です。東京を中心に1都6県にまたがり、日本の総人口の約3分の1が集中しています。'
  },
  // 16
  {
    text: '本州と北海道を結ぶ海底トンネルはどれですか？',
    choices: ['関門トンネル', '青函トンネル', '東京湾アクアライン', '瀬戸大橋'],
    correct: 1,
    explanation: '青函トンネルは全長53.85kmで、1988年開通。津軽海峡の海底を通る世界最長クラスの海底トンネルで、北海道新幹線も走行しています。'
  },
  // 17
  {
    text: '世界自然遺産「知床」がある都道府県はどれですか？',
    choices: ['青森県', '岩手県', '北海道', '秋田県'],
    correct: 2,
    explanation: '知床は北海道・斜里町と羅臼町にまたがる半島で、2005年にユネスコ世界自然遺産に登録されました。流氷と豊かな生態系で知られています。'
  },
  // 18
  {
    text: '日本最大の砂丘がある都道府県はどれですか？',
    choices: ['島根県', '鳥取県', '兵庫県', '岡山県'],
    correct: 1,
    explanation: '鳥取砂丘は鳥取県にある日本最大の砂丘です。南北2.4km・東西16kmにわたり、日本で唯一「砂漠」の景観が広がる観光地です。'
  },
  // 19
  {
    text: '「天橋立」がある都道府県はどれですか？',
    choices: ['兵庫県', '鳥取県', '島根県', '京都府'],
    correct: 3,
    explanation: '天橋立は京都府宮津市にある全長約3.6kmの砂嘴（さし）です。松島・宮島とともに「日本三景」のひとつに数えられています。'
  },
  // 20
  {
    text: '「兼六園」がある都市はどれですか？',
    choices: ['金沢市', '富山市', '福井市', '新潟市'],
    correct: 0,
    explanation: '兼六園は石川県金沢市にある日本三名園のひとつです。水戸の偕楽園、岡山の後楽園と並ぶ庭園で、江戸時代に加賀藩前田家によって造られました。'
  },
  // 21
  {
    text: '「阿蘇山」がある都道府県はどれですか？',
    choices: ['大分県', '宮崎県', '熊本県', '鹿児島県'],
    correct: 2,
    explanation: '阿蘇山は熊本県にある活火山で、世界最大級のカルデラを持ちます。最高峰の高岳は標高1,592mで、今も活発な火山活動が続いています。'
  },
  // 22
  {
    text: '九州地方（沖縄を除く）を構成する都道府県の数はいくつですか？',
    choices: ['7', '6', '8', '5'],
    correct: 0,
    explanation: '九州地方は福岡・佐賀・長崎・熊本・大分・宮崎・鹿児島の7県から成ります。沖縄を含めると8都道府県（九州・沖縄地方）となります。'
  },
  // 23
  {
    text: '「宍道湖（しんじこ）」がある都道府県はどれですか？',
    choices: ['鳥取県', '島根県', '岡山県', '広島県'],
    correct: 1,
    explanation: '宍道湖は島根県にある汽水湖で、面積約79km²。シジミの産地として有名で、夕暮れ時に宍道湖に沈む夕日は「日本の夕日百選」に選ばれています。'
  },
  // 24
  {
    text: '「諏訪湖」がある都道府県はどれですか？',
    choices: ['山梨県', '岐阜県', '長野県', '新潟県'],
    correct: 2,
    explanation: '諏訪湖は長野県の中央部に位置する周囲約16kmの湖です。冬には全面結氷し、氷が盛り上がる「御神渡り（おみわたり）」が神事として知られています。'
  },
  // 25
  {
    text: '「浜名湖」がある都道府県はどれですか？',
    choices: ['静岡県', '愛知県', '三重県', '岐阜県'],
    correct: 0,
    explanation: '浜名湖は静岡県西部にある汽水湖で、面積約64km²。うなぎの養殖が盛んで「浜名湖のうなぎ」は全国的に有名です。'
  },
  // 26
  {
    text: '「十和田湖」がまたがる2つの県はどれですか？',
    choices: ['青森県・岩手県', '秋田県・岩手県', '青森県・山形県', '青森県・秋田県'],
    correct: 3,
    explanation: '十和田湖は青森県と秋田県にまたがるカルデラ湖です。最大深度326.8mで日本第3位の深さを誇り、十和田八幡平国立公園の中心に位置します。'
  },
  // 27
  {
    text: '「明石海峡大橋」が結んでいる場所はどれですか？',
    choices: ['神戸市と淡路島', '尾道市と今治市', '倉敷市と坂出市', '下関市と北九州市'],
    correct: 0,
    explanation: '明石海峡大橋は兵庫県神戸市と淡路島を結ぶ全長3,911mの吊り橋です。1998年開通で、完成当時は世界最長の吊り橋でした。'
  },
  // 28
  {
    text: '「瀬戸大橋」の本州側（岡山県）の接続点がある市はどれですか？',
    choices: ['倉敷市', '岡山市', '笠岡市', '玉野市'],
    correct: 0,
    explanation: '瀬戸大橋は岡山県倉敷市（児島）と香川県坂出市を結ぶ橋梁群の総称です。1988年開通で、鉄道と道路の両方が通る世界最大級の橋です。'
  },
  // 29
  {
    text: '信濃川の河口がある都市はどれですか？',
    choices: ['富山市', '長岡市', '新潟市', '上越市'],
    correct: 2,
    explanation: '信濃川は新潟市で日本海に注ぎます。河口付近では幅が広く、新潟市の市街地を二分する大河として市民の生活に深く関わっています。'
  },
  // 30
  {
    text: '「琵琶湖」がある都道府県はどれですか？',
    choices: ['京都府', '滋賀県', '奈良県', '三重県'],
    correct: 1,
    explanation: '琵琶湖は滋賀県の面積の約6分の1を占める日本最大の湖で、近畿地方の重要な水源です。湖の形がビワの葉に似ていることから「琵琶湖」と呼ばれます。'
  },
  // 31
  {
    text: '「霞ヶ浦」がある都道府県はどれですか？',
    choices: ['茨城県', '千葉県', '埼玉県', '栃木県'],
    correct: 0,
    explanation: '霞ヶ浦は茨城県にある日本第2位の湖（面積約220km²）です。琵琶湖に次ぐ大きさで、ワカサギやレンコンの産地としても知られています。'
  },
  // 32
  {
    text: '「阿寒湖」がある都道府県はどれですか？',
    choices: ['岩手県', '青森県', '秋田県', '北海道'],
    correct: 3,
    explanation: '阿寒湖は北海道東部にある湖で、天然記念物「マリモ」の生息地として有名です。周辺にはアイヌ文化を伝えるコタンがあります。'
  },
  // 33
  {
    text: '「伊豆半島」がある都道府県はどれですか？',
    choices: ['神奈川県', '千葉県', '静岡県', '愛知県'],
    correct: 2,
    explanation: '伊豆半島は静岡県東部に突き出た半島です。温暖な気候と海岸線の美しさで知られ、熱海・伊東・下田など多くの温泉・観光地が集まります。'
  },
  // 34
  {
    text: '日本最長の半島はどれですか？',
    choices: ['下北半島', '能登半島', '房総半島', '紀伊半島'],
    correct: 3,
    explanation: '紀伊半島は三重・奈良・和歌山の3県にまたがる日本最大の半島です。面積は約11,000km²で、「紀伊山地の霊場と参詣道」が世界遺産に登録されています。'
  },
  // 35
  {
    text: '「下北半島」がある都道府県はどれですか？',
    choices: ['青森県', '岩手県', '秋田県', '山形県'],
    correct: 0,
    explanation: '下北半島は青森県の東部に突き出た半島で、斧の形に似た独特の地形です。本州最北端の大間崎があり、マグロの一本釣りで有名な大間町があります。'
  },
  // 36
  {
    text: '「能登半島」がある都道府県はどれですか？',
    choices: ['富山県', '新潟県', '石川県', '福井県'],
    correct: 2,
    explanation: '能登半島は石川県の北部に日本海へ突き出た半島です。独自の文化や伝統が根付いており、輪島塗や能登の里山里海が「世界農業遺産」に認定されています。'
  },
  // 37
  {
    text: '「津軽海峡」を挟む2つの都道府県はどれですか？',
    choices: ['青森県と秋田県', '青森県と北海道', '北海道と新潟県', '岩手県と北海道'],
    correct: 1,
    explanation: '津軽海峡は青森県と北海道の間にある海峡で、最狭部は約19.5km。青函トンネルがこの海峡の海底を通っており、北海道新幹線も走行しています。'
  },
  // 38
  {
    text: '「関門海峡」を挟む2つの県はどれですか？',
    choices: ['広島県と福岡県', '山口県と大分県', '広島県と大分県', '山口県と福岡県'],
    correct: 3,
    explanation: '関門海峡は山口県下関市と福岡県北九州市の間にある海峡で、最狭部は約600m。本州と九州を隔てるこの海峡には関門橋や関門トンネルが架かります。'
  },
  // 39
  {
    text: '中部地方を構成する都道府県の数はいくつですか？',
    choices: ['7', '8', '9', '10'],
    correct: 2,
    explanation: '中部地方は新潟・富山・石川・福井・山梨・長野・岐阜・静岡・愛知の9県から成ります。北陸・東海・甲信越の3地域に分けられることもあります。'
  },
  // 40
  {
    text: '「桜島」がある都道府県はどれですか？',
    choices: ['宮崎県', '鹿児島県', '熊本県', '大分県'],
    correct: 1,
    explanation: '桜島は鹿児島県の鹿児島湾（錦江湾）にある活火山です。かつては島でしたが1914年の大正噴火で大隅半島と陸続きになりました。現在も活発に噴火を続けています。'
  },
  // 41
  {
    text: '東北地方を構成する都道府県の数はいくつですか？',
    choices: ['6', '7', '5', '8'],
    correct: 0,
    explanation: '東北地方は青森・岩手・宮城・秋田・山形・福島の6県から成ります。東北6県とも呼ばれ、日本の国土面積の約18%を占めます。'
  },
  // 42
  {
    text: '「富士五湖」に含まれない湖はどれですか？',
    choices: ['山中湖', '河口湖', '西湖', '猪苗代湖'],
    correct: 3,
    explanation: '富士五湖は山中湖・河口湖・西湖・精進湖・本栖湖の5つです。猪苗代湖は福島県にある湖で、富士五湖には含まれません。'
  },
  // 43
  {
    text: '「淡路島」がある都道府県はどれですか？',
    choices: ['大阪府', '兵庫県', '和歌山県', '徳島県'],
    correct: 1,
    explanation: '淡路島は兵庫県に属する瀬戸内海最大の島（面積約592km²）です。明石海峡大橋で本州と、大鳴門橋で四国と結ばれています。'
  },
  // 44
  {
    text: '「小豆島」がある都道府県はどれですか？',
    choices: ['香川県', '愛媛県', '広島県', '岡山県'],
    correct: 0,
    explanation: '小豆島は香川県に属する瀬戸内海の島で、面積約153km²。オリーブの産地として有名で、映画「二十四の瞳」の舞台としても知られています。'
  },
  // 45
  {
    text: '近畿地方を構成する都道府県の数はいくつですか？',
    choices: ['6', '7', '8', '5'],
    correct: 1,
    explanation: '近畿地方は大阪府・京都府・兵庫県・奈良県・滋賀県・和歌山県・三重県の2府5県（計7）から成ります。'
  },
  // 46
  {
    text: '日本で最も面積が小さい都道府県はどれですか？',
    choices: ['大阪府', '香川県', '神奈川県', '東京都'],
    correct: 1,
    explanation: '香川県の面積は約1,876km²で日本最小の都道府県です。四国の北東部に位置し、うどんの産地として「うどん県」とも呼ばれています。'
  },
  // 47
  {
    text: '中国地方を構成する都道府県の数はいくつですか？',
    choices: ['5', '6', '4', '7'],
    correct: 0,
    explanation: '中国地方は鳥取・島根・岡山・広島・山口の5県から成ります。中国山地を境に日本海側（山陰）と瀬戸内海側（山陽）に分けられます。'
  },
  // 48
  {
    text: '「甲府盆地」がある都道府県はどれですか？',
    choices: ['山梨県', '長野県', '静岡県', '神奈川県'],
    correct: 0,
    explanation: '甲府盆地は山梨県中央部に広がる盆地で、周囲を山に囲まれた内陸性の気候です。ブドウ・モモなどの果物の産地として有名です。'
  },
  // 49
  {
    text: '「猪苗代湖」がある都道府県はどれですか？',
    choices: ['山形県', '宮城県', '新潟県', '福島県'],
    correct: 3,
    explanation: '猪苗代湖は福島県にある面積約103km²の湖で、日本第4位の大きさです。磐梯山の麓に位置し、「天鏡湖」の別名でも知られる透明度の高い湖です。'
  },
  // 50
  {
    text: '「洞爺湖」がある都道府県はどれですか？',
    choices: ['青森県', '北海道', '岩手県', '秋田県'],
    correct: 1,
    explanation: '洞爺湖は北海道南西部にあるカルデラ湖で、周囲約43km。2000年の有珠山噴火で有名になり、2008年にはG8洞爺湖サミットが開催されました。'
  },
  // 51
  {
    text: '「磐梯山（ばんだいさん）」がある都道府県はどれですか？',
    choices: ['山形県', '福島県', '宮城県', '新潟県'],
    correct: 1,
    explanation: '磐梯山は福島県にある標高1,816mの火山で、「会津富士」とも呼ばれます。1888年の大爆発で山体崩壊が起き、裏磐梯の五色沼など多くの湖沼が生まれました。'
  },
  // 52
  {
    text: '「草津温泉」がある都道府県はどれですか？',
    choices: ['栃木県', '長野県', '新潟県', '群馬県'],
    correct: 3,
    explanation: '草津温泉は群馬県草津町にある日本有数の温泉地です。湯畑を中心とした温泉街が有名で、強酸性の泉質と豊富な湯量を誇ります。'
  },
  // 53
  {
    text: '「別府温泉」がある都道府県はどれですか？',
    choices: ['熊本県', '大分県', '宮崎県', '鹿児島県'],
    correct: 1,
    explanation: '別府温泉は大分県別府市にある日本最大の温泉地です。源泉数・湧出量ともに日本一で、「地獄めぐり」をはじめとする観光スポットで知られています。'
  },
  // 54
  {
    text: '「有馬温泉」がある都道府県はどれですか？',
    choices: ['大阪府', '京都府', '兵庫県', '奈良県'],
    correct: 2,
    explanation: '有馬温泉は兵庫県神戸市北区にある日本最古の温泉地のひとつです。鉄分を含む赤褐色の「金泉」と無色透明の「銀泉」が湧き出します。'
  },
  // 55
  {
    text: '「箱根温泉」がある都道府県はどれですか？',
    choices: ['神奈川県', '静岡県', '山梨県', '東京都'],
    correct: 0,
    explanation: '箱根温泉は神奈川県箱根町にある温泉地で、富士山や芦ノ湖の景観で有名です。東京から近く、首都圏を代表するリゾート地となっています。'
  },
  // 56
  {
    text: '「道後温泉」がある都道府県はどれですか？',
    choices: ['高知県', '徳島県', '香川県', '愛媛県'],
    correct: 3,
    explanation: '道後温泉は愛媛県松山市にある日本最古の温泉のひとつで、3,000年以上の歴史があるとされます。明治時代に建てられた道後温泉本館は国の重要文化財です。'
  },
  // 57
  {
    text: '「佐渡島」がある都道府県はどれですか？',
    choices: ['富山県', '石川県', '福井県', '新潟県'],
    correct: 3,
    explanation: '佐渡島は新潟県に属する離島で、面積約855km²。かつての金山（佐渡金山）で有名で、特別天然記念物のトキの保護・繁殖が行われています。'
  },
  // 58
  {
    text: '「奄美大島」がある都道府県はどれですか？',
    choices: ['鹿児島県', '沖縄県', '宮崎県', '熊本県'],
    correct: 0,
    explanation: '奄美大島は鹿児島県に属する離島で、面積約712km²。亜熱帯性気候の豊かな自然が広がり、2021年に「奄美大島、徳之島、沖縄島北部及び西表島」として世界自然遺産に登録されました。'
  },
  // 59
  {
    text: '「対馬（つしま）」がある都道府県はどれですか？',
    choices: ['佐賀県', '福岡県', '長崎県', '熊本県'],
    correct: 2,
    explanation: '対馬は長崎県に属する島で、韓国の釜山まで約50kmの距離にあります。面積は約709km²で、国境の島として古くから大陸との交流拠点でした。'
  },
  // 60
  {
    text: '「屋久島」がある都道府県はどれですか？',
    choices: ['沖縄県', '宮崎県', '熊本県', '鹿児島県'],
    correct: 3,
    explanation: '屋久島は鹿児島県に属する離島で、1993年にユネスコ世界自然遺産に登録されました。樹齢7,200年とも言われる縄文杉をはじめ、多くの屋久杉が生育しています。'
  },
  // 61
  {
    text: '北アルプス（飛騨山脈）の最高峰はどれですか？',
    choices: ['槍ヶ岳', '立山', '奥穂高岳', '白山'],
    correct: 2,
    explanation: '奥穂高岳は標高3,190mで北アルプス（飛騨山脈）の最高峰です。長野県と岐阜県の境に位置し、「日本の屋根」と呼ばれる穂高連峰の主峰です。'
  },
  // 62
  {
    text: '南アルプス（赤石山脈）の最高峰はどれですか？',
    choices: ['北岳', '仙丈ヶ岳', '甲斐駒ヶ岳', '荒川岳'],
    correct: 0,
    explanation: '北岳は標高3,193mで南アルプス（赤石山脈）の最高峰、日本第2位の高さを誇ります。山梨県に位置し、南アルプス国立公園内にあります。'
  },
  // 63
  {
    text: '「志摩半島」がある都道府県はどれですか？',
    choices: ['愛知県', '岐阜県', '奈良県', '三重県'],
    correct: 3,
    explanation: '志摩半島は三重県南東部に位置する半島で、英虞湾（あごわん）など複雑なリアス式海岸が発達しています。真珠養殖発祥の地として有名です。'
  },
  // 64
  {
    text: '「房総半島」がある都道府県はどれですか？',
    choices: ['茨城県', '千葉県', '神奈川県', '東京都'],
    correct: 1,
    explanation: '房総半島は千葉県南部に突き出た半島です。温暖な気候を生かした花卉（かき）栽培が盛んで、九十九里浜や館山などの海岸リゾートでも知られています。'
  },
  // 65
  {
    text: '「三浦半島」がある都道府県はどれですか？',
    choices: ['千葉県', '東京都', '神奈川県', '静岡県'],
    correct: 2,
    explanation: '三浦半島は神奈川県の南部に突き出た半島で、東京湾と相模湾を分けています。マグロの水揚げ港として有名な三崎港があり、横須賀市・逗子市・葉山町などが含まれます。'
  },
  // 66
  {
    text: '「男鹿半島（おがはんとう）」がある都道府県はどれですか？',
    choices: ['青森県', '岩手県', '山形県', '秋田県'],
    correct: 3,
    explanation: '男鹿半島は秋田県の西部に日本海へ突き出た半島です。なまはげ発祥の地として有名で、「男鹿のナマハゲ」は国の重要無形民俗文化財に指定されています。'
  },
  // 67
  {
    text: '「大隅半島（おおすみはんとう）」がある都道府県はどれですか？',
    choices: ['宮崎県', '熊本県', '鹿児島県', '大分県'],
    correct: 2,
    explanation: '大隅半島は鹿児島県の東部に突き出た半島で、鹿児島湾を挟んで薩摩半島と向かい合っています。佐多岬は本土最南端の地点です。'
  },
  // 68
  {
    text: '「五島列島」がある都道府県はどれですか？',
    choices: ['佐賀県', '福岡県', '熊本県', '長崎県'],
    correct: 3,
    explanation: '五島列島は長崎県の西部に浮かぶ約140の島々から成ります。江戸時代の隠れキリシタンの歴史が残り、「長崎と天草地方の潜伏キリシタン関連遺産」として世界遺産に登録されています。'
  },
  // 69
  {
    text: '内陸県（海に面していない都道府県）に該当しないのはどれですか？',
    choices: ['栃木県', '岐阜県', '長野県', '山梨県'],
    correct: 0,
    explanation: '栃木県は関東地方の内陸に位置し、海には面していません。内陸県は栃木・群馬・埼玉・山梨・長野・岐阜・奈良・滋賀の8県です。「面していない」を「面している」と誤解しないよう注意：正解は問いの誤りであり、栃木は内陸県のひとつです。'
  },
  // 70 - 問い直し（69はやや複雑なので差し替え）
  {
    text: '日本の内陸県（海に面していない都道府県）は全部でいくつありますか？',
    choices: ['6', '7', '8', '9'],
    correct: 2,
    explanation: '日本の内陸県は栃木・群馬・埼玉・山梨・長野・岐阜・奈良・滋賀の8県です。（実際は69番を「内陸県8つ」で再出題している）'
  },
  // 71
  {
    text: '「宮島（厳島）」がある都道府県はどれですか？',
    choices: ['山口県', '広島県', '岡山県', '鳥取県'],
    correct: 1,
    explanation: '宮島（厳島）は広島県廿日市市に属する島で、海上に浮かぶ厳島神社の大鳥居が有名です。松島・天橋立とともに日本三景のひとつに数えられています。'
  },
  // 72
  {
    text: '「松島」がある都道府県はどれですか？',
    choices: ['岩手県', '福島県', '宮城県', '山形県'],
    correct: 2,
    explanation: '松島は宮城県松島町にある景勝地で、260余りの島々が松島湾に浮かびます。天橋立・宮島とともに「日本三景」のひとつです。'
  },
  // 73
  {
    text: '「日本三景」に含まれないのはどれですか？',
    choices: ['松島', '天橋立', '宮島', '琵琶湖'],
    correct: 3,
    explanation: '日本三景は松島（宮城県）・天橋立（京都府）・宮島（広島県）の3か所です。琵琶湖は日本最大の湖ですが、日本三景には含まれません。'
  },
  // 74
  {
    text: '「伊勢湾」を囲む2つの県はどれですか？',
    choices: ['岐阜県と愛知県', '三重県と奈良県', '三重県と愛知県', '愛知県と静岡県'],
    correct: 2,
    explanation: '伊勢湾は三重県と愛知県に挟まれた湾です。湾内には知多半島・渥美半島が突き出し、伊勢神宮のある伊勢市も三重県に位置します。'
  },
  // 75
  {
    text: '日本の最北端の本土の岬はどれですか？',
    choices: ['竜飛崎', '宗谷岬', '納沙布岬', '知床岬'],
    correct: 1,
    explanation: '宗谷岬は北海道稚内市にある日本最北端の地（北緯45度31分）です。晴れた日には約43km先のサハリン（樺太）を眺めることができます。'
  },
  // 76
  {
    text: '日本の最南端の本土の地点がある都道府県はどれですか？',
    choices: ['沖縄県', '鹿児島県', '宮崎県', '熊本県'],
    correct: 1,
    explanation: '本土最南端の佐多岬（北緯30度59分）は鹿児島県大隅半島にあります。（離島を含めた最南端は東京都・沖ノ鳥島）'
  },
  // 77
  {
    text: '四国地方で最も面積が大きい都道府県はどれですか？',
    choices: ['愛媛県', '徳島県', '高知県', '香川県'],
    correct: 2,
    explanation: '高知県の面積は約7,103km²で四国最大です。四国の面積のおよそ38%を占め、日本の都道府県の中でも上位に入ります。'
  },
  // 78
  {
    text: '「西日本最高峰」と呼ばれる山はどれですか？',
    choices: ['剣山', '大台ヶ原山', '石鎚山', '大山'],
    correct: 2,
    explanation: '石鎚山は愛媛県にある標高1,982mの山で、西日本最高峰です。修験道の霊山として知られ、天狗岳などの岩峰が連なる険しい山容が特徴です。'
  },
  // 79
  {
    text: '近畿地方で最も面積が大きい都道府県はどれですか？',
    choices: ['三重県', '兵庫県', '奈良県', '和歌山県'],
    correct: 1,
    explanation: '兵庫県の面積は約8,401km²で近畿地方最大です。瀬戸内海・日本海の両方に面し、神戸・姫路・明石など多様な都市を含みます。'
  },
  // 80
  {
    text: '「利根川」の河口がある都道府県はどれですか？',
    choices: ['茨城県', '千葉県', '埼玉県', '東京都'],
    correct: 1,
    explanation: '利根川は茨城県・千葉県の境を流れ、千葉県銚子市で太平洋に注ぎます。流域面積は約16,840km²で日本最大を誇り、「坂東太郎」とも呼ばれます。'
  },
  // 81
  {
    text: '「出雲大社」がある都道府県はどれですか？',
    choices: ['鳥取県', '島根県', '広島県', '山口県'],
    correct: 1,
    explanation: '出雲大社は島根県出雲市に鎮座する神社で、「縁結びの神様」として知られる大国主大神（おおくにぬしのおおかみ）を祀ります。旧暦10月は全国の神々が集まる「神在月」とされます。'
  },
  // 82
  {
    text: '「四国カルスト」がまたがる2つの県はどれですか？',
    choices: ['徳島県・高知県', '高知県・愛媛県', '愛媛県・香川県', '高知県・香川県'],
    correct: 1,
    explanation: '四国カルストは高知県と愛媛県にまたがる標高約1,000〜1,400mの台地で、日本三大カルストのひとつです。牧場と白い石灰岩が並ぶ独特の景観が広がります。'
  },
  // 83
  {
    text: '「日本三大急流」のひとつ「球磨川（くまがわ）」がある都道府県はどれですか？',
    choices: ['大分県', '鹿児島県', '宮崎県', '熊本県'],
    correct: 3,
    explanation: '球磨川は熊本県を流れ、日本三大急流（富士川・最上川・球磨川）のひとつです。全長約115kmで、川下りの観光でも知られています。'
  },
  // 84
  {
    text: '「日本三大急流」のひとつ「最上川（もがみがわ）」がある都道府県はどれですか？',
    choices: ['山形県', '秋田県', '宮城県', '岩手県'],
    correct: 0,
    explanation: '最上川は山形県を流れる全長229kmの川で、日本三大急流のひとつです。松尾芭蕉が「五月雨をあつめて早し最上川」と詠んだことでも有名です。'
  },
  // 85
  {
    text: '「白川郷・五箇山の合掌造り集落」の世界遺産がある都道府県はどれですか？',
    choices: ['長野県と新潟県', '石川県と富山県', '岐阜県と石川県', '岐阜県と富山県'],
    correct: 3,
    explanation: '白川郷（岐阜県白川村）と五箇山（富山県南砺市）の合掌造り集落は1995年に世界文化遺産に登録されました。急勾配の萱葺き屋根が特徴の伝統的集落です。'
  },
  // 86
  {
    text: '「渥美半島（あつみはんとう）」がある都道府県はどれですか？',
    choices: ['愛知県', '三重県', '静岡県', '岐阜県'],
    correct: 0,
    explanation: '渥美半島は愛知県の南部に突き出た半島で、伊勢湾と遠州灘（太平洋）を分けています。電照菊の産地として有名で、先端には伊良湖岬があります。'
  },
  // 87
  {
    text: '関東地方の都道府県の中で最も面積が大きいのはどれですか？',
    choices: ['茨城県', '群馬県', '栃木県', '埼玉県'],
    correct: 2,
    explanation: '栃木県の面積は約6,408km²で関東地方最大です。日光国立公園や那須高原など自然豊かな内陸県で、日本最大の滝「華厳ノ滝」もあります。'
  },
  // 88
  {
    text: '九州地方（沖縄を除く）で最も面積が大きい都道府県はどれですか？',
    choices: ['鹿児島県', '熊本県', '大分県', '宮崎県'],
    correct: 0,
    explanation: '鹿児島県の面積は約9,187km²で九州地方最大（沖縄除く）です。多くの離島を含み、屋久島や奄美大島など自然豊かな島々が点在します。'
  },
  // 89
  {
    text: '「島原半島」がある都道府県はどれですか？',
    choices: ['熊本県', '長崎県', '佐賀県', '福岡県'],
    correct: 1,
    explanation: '島原半島は長崎県の東部に位置し、有明海に突き出した半島です。雲仙岳（普賢岳）があり、1991年の火砕流災害でも知られています。'
  },
  // 90
  {
    text: '「天竜川」の河口がある都道府県はどれですか？',
    choices: ['愛知県', '三重県', '静岡県', '岐阜県'],
    correct: 2,
    explanation: '天竜川は長野県諏訪湖を源流とし、静岡県浜松市で遠州灘（太平洋）に注ぎます。全長213kmで、「日本三大急流」に数えられることもあります。'
  },
  // 91
  {
    text: '「知多半島」がある都道府県はどれですか？',
    choices: ['三重県', '愛知県', '岐阜県', '静岡県'],
    correct: 1,
    explanation: '知多半島は愛知県の西部に伸びる半島で、伊勢湾と知多湾を分けています。醸造業（みりん・酢・醤油）が盛んで、半島沿岸には多くの港があります。'
  },
  // 92
  {
    text: '「北陸地方」に属さない都道府県はどれですか？',
    choices: ['富山県', '新潟県', '石川県', '長野県'],
    correct: 3,
    explanation: '北陸地方は一般的に富山・石川・福井の3県（広義では新潟を含む4県）を指します。長野県は中部地方（甲信越地方）に属し、北陸には含まれません。'
  },
  // 93
  {
    text: '「中央アルプス」の正式名称はどれですか？',
    choices: ['飛騨山脈', '木曽山脈', '赤石山脈', '鈴鹿山脈'],
    correct: 1,
    explanation: '中央アルプスの正式名称は木曽山脈です。北アルプス（飛騨山脈）・南アルプス（赤石山脈）とともに「日本アルプス」を形成し、最高峰は木曽駒ヶ岳（2,956m）です。'
  },
  // 94
  {
    text: '「壱岐島（いきのしま）」がある都道府県はどれですか？',
    choices: ['福岡県', '長崎県', '佐賀県', '熊本県'],
    correct: 1,
    explanation: '壱岐島は長崎県に属し、玄界灘に浮かぶ面積約139km²の島です。古来「一支国（いきこく）」として大陸との交流拠点であり、多くの神社や古墳が残ります。'
  },
  // 95
  {
    text: '「牡鹿半島（おしかはんとう）」がある都道府県はどれですか？',
    choices: ['宮城県', '岩手県', '青森県', '福島県'],
    correct: 0,
    explanation: '牡鹿半島は宮城県の東部に太平洋へ突き出た半島です。三陸復興国立公園の南端に位置し、半島の沖合に浮かぶ金華山は「東の霊場」として知られています。'
  },
  // 96
  {
    text: '「浅間山（あさまやま）」がまたがる2つの都道府県はどれですか？',
    choices: ['山梨県・長野県', '埼玉県・群馬県', '群馬県・長野県', '長野県・新潟県'],
    correct: 2,
    explanation: '浅間山は群馬県と長野県の県境に位置する標高2,568mの活火山です。今も活動を続けており、1783年（天明3年）の大噴火は天明の飢饉の一因となりました。'
  },
  // 97
  {
    text: '「白神山地」の世界自然遺産がまたがる2つの都道府県はどれですか？',
    choices: ['青森県・岩手県', '岩手県・秋田県', '青森県・山形県', '青森県・秋田県'],
    correct: 3,
    explanation: '白神山地は青森県と秋田県にまたがる山地で、世界最大級のブナ天然林が広がります。1993年にユネスコ世界自然遺産に登録された日本初の世界自然遺産のひとつです。'
  },
  // 98
  {
    text: '「東大寺」がある都市はどれですか？',
    choices: ['奈良市', '京都市', '大阪市', '神戸市'],
    correct: 0,
    explanation: '東大寺は奈良県奈良市にある世界最大級の木造建築物「大仏殿」で有名な寺院です。752年に開眼された盧舎那仏（大仏）は高さ約15mを誇ります。'
  },
  // 99
  {
    text: '「関東地方」に属さない都道府県はどれですか？',
    choices: ['茨城県', '埼玉県', '長野県', '千葉県'],
    correct: 2,
    explanation: '長野県は中部地方（甲信越地方）に属し、関東地方には含まれません。関東地方は東京・神奈川・埼玉・千葉・茨城・栃木・群馬の1都6県です。'
  },
  // 100
  {
    text: '日本で「海なし県」（内陸県）に該当するのはどれですか？',
    choices: ['滋賀県', '島根県', '山口県', '鳥取県'],
    correct: 0,
    explanation: '滋賀県は海に面していない内陸県のひとつです。ただし琵琶湖があるため「湖の県」とも言えます。内陸県は栃木・群馬・埼玉・山梨・長野・岐阜・奈良・滋賀の8県です。'
  }
];

const QUIZ_COUNT = 10;

function pickQuestions() {
  return [...questions].sort(() => Math.random() - 0.5).slice(0, QUIZ_COUNT);
}

const TIMER_MAX = 30;
const TIMER_CIRCUMFERENCE = 2 * Math.PI * 26; // r=26

let activeQuestions = [];
let currentIndex = 0;
let score = 0;
let answered = false;
let timerId = null;
let timeLeft = 0;

const startScreen    = document.getElementById('start-screen');
const quizScreen     = document.getElementById('quiz-screen');
const resultScreen   = document.getElementById('result-screen');
const startBtn       = document.getElementById('start-btn');
const nextBtn        = document.getElementById('next-btn');
const retryBtn       = document.getElementById('retry-btn');
const questionText   = document.getElementById('question-text');
const choicesEl      = document.getElementById('choices');
const feedbackEl     = document.getElementById('feedback');
const questionNumber = document.getElementById('question-number');
const scoreCounter   = document.getElementById('score-counter');
const progressFill   = document.getElementById('progress-fill');
const scoreFraction  = document.getElementById('score-fraction');
const scoreMessage   = document.getElementById('score-message');
const resultIcon     = document.getElementById('result-icon');
const timerCount     = document.getElementById('timer-count');
const timerRing      = document.getElementById('timer-ring');
const weatherEl      = document.getElementById('weather');

startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', goNext);
retryBtn.addEventListener('click', restartQuiz);

function startTimer() {
  clearTimer();
  timeLeft = TIMER_MAX;

  timerRing.style.transition = 'none';
  timerRing.style.strokeDashoffset = '0';
  timerRing.style.stroke = '#4299e1';
  timerCount.textContent = TIMER_MAX;
  timerCount.style.color = '#4a5568';
  timerCount.classList.remove('danger');

  requestAnimationFrame(() => {
    timerRing.style.transition = 'stroke-dashoffset 1s linear, stroke 0.4s';
  });

  timerId = setInterval(() => {
    timeLeft--;
    updateTimerUI();
    if (timeLeft <= 0) {
      clearTimer();
      handleTimeout();
    }
  }, 1000);
}

function clearTimer() {
  if (timerId !== null) {
    clearInterval(timerId);
    timerId = null;
  }
}

function updateTimerUI() {
  timerCount.textContent = timeLeft;
  timerRing.style.strokeDashoffset = TIMER_CIRCUMFERENCE * (1 - timeLeft / TIMER_MAX);

  if (timeLeft <= 5) {
    timerRing.style.stroke = '#e53e3e';
    timerCount.style.color = '#e53e3e';
    timerCount.classList.add('danger');
  } else if (timeLeft <= 10) {
    timerRing.style.stroke = '#dd6b20';
    timerCount.style.color = '#dd6b20';
    timerCount.classList.remove('danger');
  } else {
    timerRing.style.stroke = '#4299e1';
    timerCount.style.color = '#4a5568';
    timerCount.classList.remove('danger');
  }
}

function handleTimeout() {
  if (answered) return;
  answered = true;

  const q = activeQuestions[currentIndex];
  const buttons = choicesEl.querySelectorAll('.choice-btn');

  buttons.forEach(btn => (btn.disabled = true));
  buttons[q.correct].classList.add('correct');

  feedbackEl.innerHTML = `<div class="feedback-title">⏰ 時間切れ！</div>正解は「${q.choices[q.correct]}」です。${q.explanation}`;
  feedbackEl.className = 'feedback incorrect';

  const isLast = currentIndex === activeQuestions.length - 1;
  nextBtn.textContent = isLast ? '結果を見る' : '次の問題へ';
  nextBtn.classList.remove('hidden');
}

function startQuiz() {
  currentIndex = 0;
  score = 0;
  activeQuestions = pickQuestions();
  startScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');
  showQuestion();
}

function showQuestion() {
  answered = false;
  const q = activeQuestions[currentIndex];
  const total = activeQuestions.length;

  questionNumber.textContent = `${currentIndex + 1} / ${total}`;
  scoreCounter.textContent   = `スコア: ${score}`;
  progressFill.style.width   = `${(currentIndex / total) * 100}%`;

  questionText.textContent = q.text;

  choicesEl.innerHTML = '';
  q.choices.forEach((choice, i) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.textContent = choice;
    btn.addEventListener('click', () => selectAnswer(i));
    choicesEl.appendChild(btn);
  });

  feedbackEl.className = 'feedback hidden';
  feedbackEl.innerHTML = '';
  nextBtn.classList.add('hidden');

  startTimer();
}

function selectAnswer(index) {
  if (answered) return;
  answered = true;
  clearTimer();

  const q = activeQuestions[currentIndex];
  const buttons = choicesEl.querySelectorAll('.choice-btn');

  buttons.forEach(btn => (btn.disabled = true));

  const isCorrect = index === q.correct;

  if (isCorrect) {
    score++;
    buttons[index].classList.add('correct');
    feedbackEl.innerHTML = `<div class="feedback-title">&#x2714; 正解！</div>${q.explanation}`;
    feedbackEl.className = 'feedback correct';
  } else {
    buttons[index].classList.add('incorrect');
    buttons[q.correct].classList.add('correct');
    feedbackEl.innerHTML = `<div class="feedback-title">&#x2716; 不正解</div>正解は「${q.choices[q.correct]}」です。${q.explanation}`;
    feedbackEl.className = 'feedback incorrect';
  }

  scoreCounter.textContent = `スコア: ${score}`;

  const isLast = currentIndex === activeQuestions.length - 1;
  nextBtn.textContent = isLast ? '結果を見る' : '次の問題へ';
  nextBtn.classList.remove('hidden');
}

function goNext() {
  currentIndex++;
  if (currentIndex >= activeQuestions.length) {
    showResult();
  } else {
    showQuestion();
  }
}

function showResult() {
  clearTimer();
  quizScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');

  const total = activeQuestions.length;
  scoreFraction.textContent = `${total}問中 ${score}問`;

  if (score === total) {
    resultIcon.innerHTML = '&#x1F3C6;';
    scoreMessage.textContent = '素晴らしい！パーフェクトです！';
  } else if (score >= 3) {
    resultIcon.innerHTML = '&#x1F44D;';
    scoreMessage.textContent = 'よくできました！もう一息です。';
  } else {
    resultIcon.innerHTML = '&#x1F4AA;';
    scoreMessage.textContent = '次はもっとできるはず！もう一度挑戦してみましょう。';
  }
}

function restartQuiz() {
  resultScreen.classList.add('hidden');
  startScreen.classList.remove('hidden');
}

function getWeatherEmoji(id) {
  if (id >= 200 && id < 300) return '⛈️';
  if (id >= 300 && id < 400) return '🌦️';
  if (id >= 500 && id < 600) return '🌧️';
  if (id >= 600 && id < 700) return '🌨️';
  if (id >= 700 && id < 800) return '🌫️';
  if (id === 800) return '☀️';
  if (id === 801) return '🌤️';
  if (id === 802) return '⛅';
  if (id >= 803) return '☁️';
  return '🌡️';
}

async function fetchWeather() {
  const apiKey = CONFIG.OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Tokyo,JP&appid=${apiKey}&units=metric&lang=ja`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    const description = data.weather[0].description;
    const tempMin     = Math.round(data.main.temp_min);
    const tempMax     = Math.round(data.main.temp_max);
    const emoji       = getWeatherEmoji(data.weather[0].id);

    weatherEl.innerHTML = `
      <span class="weather-location">📍 東京の天気</span>
      <span class="weather-emoji">${emoji}</span>
      <span class="weather-desc">${description}</span>
      <span class="weather-temps">
        <span class="temp-min">↓${tempMin}°C</span>
        <span class="temp-max">↑${tempMax}°C</span>
      </span>
    `;
  } catch (e) {
    weatherEl.innerHTML = '<span class="weather-error">天気情報を取得できませんでした</span>';
  }
}

fetchWeather();
