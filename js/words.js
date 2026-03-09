// 单词数据 - 4个难度级别
const wordsData = {
  // 入门级别 - 3个字母
  1: [
    { id: 1, word: "CAT", meaning: "猫", emoji: "🐱", sentences: [{ english: "I have a cute cat.", chinese: "我有一只可爱的猫。" }, { english: "The cat is sleeping on the bed.", chinese: "猫正在床上睡觉。" }] },
    { id: 2, word: "DOG", meaning: "狗", emoji: "🐕", sentences: [{ english: "The dog loves to play fetch.", chinese: "狗喜欢玩捡球游戏。" }, { english: "My dog is very friendly.", chinese: "我的狗非常友好。" }] },
    { id: 3, word: "SUN", meaning: "太阳", emoji: "☀️", sentences: [{ english: "The sun is very bright today.", chinese: "今天的太阳非常明亮。" }, { english: "I love the warm sun.", chinese: "我喜欢温暖的太阳。" }] },
    { id: 4, word: "HAT", meaning: "帽子", emoji: "🎩", sentences: [{ english: "She wears a nice hat.", chinese: "她戴着一顶漂亮的帽子。" }, { english: "This hat is too small for me.", chinese: "这顶帽子对我来说太小了。" }] },
    { id: 5, word: "CUP", meaning: "杯子", emoji: "☕", sentences: [{ english: "I drink water from this cup.", chinese: "我用这个杯子喝水。" }, { english: "Please give me a cup of tea.", chinese: "请给我一杯茶。" }] },
    { id: 6, word: "BUS", meaning: "公共汽车", emoji: "🚌", sentences: [{ english: "The bus is coming.", chinese: "公共汽车来了。" }, { english: "I go to school by bus.", chinese: "我乘公共汽车去学校。" }] },
    { id: 7, word: "PEN", meaning: "钢笔", emoji: "🖊️", sentences: [{ english: "I write with a pen.", chinese: "我用钢笔写字。" }, { english: "This pen is blue.", chinese: "这枝钢笔是蓝色的。" }] },
    { id: 8, word: "BED", meaning: "床", emoji: "🛏️", sentences: [{ english: "I sleep on my bed.", chinese: "我睡在我的床上。" }, { english: "The bed is very soft.", chinese: "这张床很柔软。" }] },
    { id: 9, word: "CAR", meaning: "汽车", emoji: "🚗", sentences: [{ english: "My dad drives a car.", chinese: "我爸爸开汽车。" }, { english: "The car is very fast.", chinese: "这辆汽车很快。" }] },
    { id: 10, word: "PIG", meaning: "猪", emoji: "🐷", sentences: [{ english: "The pig is cute.", chinese: "小猪很可爱。" }, { english: "I like the little pig.", chinese: "我喜欢小猪。" }] },
    { id: 11, word: "COW", meaning: "奶牛", emoji: "🐄", sentences: [{ english: "The cow gives us milk.", chinese: "奶牛给我们牛奶。" }, { english: "I see a cow in the field.", chinese: "我在田野里看到一头奶牛。" }] },
    { id: 12, word: "EGG", meaning: "鸡蛋", emoji: "🥚", sentences: [{ english: "I eat an egg for breakfast.", chinese: "我早餐吃鸡蛋。" }, { english: "The chick comes from an egg.", chinese: "小鸡从鸡蛋里出来。" }] },
    { id: 13, word: "BAT", meaning: "蝙蝠", emoji: "🦇", sentences: [{ english: "The bat flies at night.", chinese: "蝙蝠在晚上飞。" }, { english: "A bat is not a bird.", chinese: "蝙蝠不是鸟。" }] },
    { id: 14, word: "RAT", meaning: "老鼠", emoji: "🐀", sentences: [{ english: "The rat is in the house.", chinese: "老鼠在房子里。" }, { english: "I saw a rat in the garden.", chinese: "我在花园里看到一只老鼠。" }] },
    { id: 15, word: "FOX", meaning: "狐狸", emoji: "🦊", sentences: [{ english: "The fox is very clever.", chinese: "狐狸非常聪明。" }, { english: "I saw a fox in the forest.", chinese: "我在森林里看到一只狐狸。" }] },
    { id: 16, word: "BOX", meaning: "盒子", emoji: "📦", sentences: [{ english: "I have a big box.", chinese: "我有一个大盒子。" }, { english: "Put the toy in the box.", chinese: "把玩具放进盒子里。" }] },
    { id: 17, word: "JOY", meaning: "快乐", emoji: "😊", sentences: [{ english: "I feel great joy today.", chinese: "今天我感到非常快乐。" }, { english: "She jumps for joy.", chinese: "她高兴得跳了起来。" }] },
    { id: 18, word: "KEY", meaning: "钥匙", emoji: "🔑", sentences: [{ english: "I lost my key.", chinese: "我丢了钥匙。" }, { english: "This is the key to the door.", chinese: "这是门的钥匙。" }] },
    { id: 19, word: "SKY", meaning: "天空", emoji: "🌤️", sentences: [{ english: "The sky is blue.", chinese: "天空是蓝色的。" }, { english: "I see a bird in the sky.", chinese: "我看到天空中有一只鸟。" }] },
    { id: 20, word: "FLY", meaning: "飞", emoji: "🪰", sentences: [{ english: "Birds fly in the sky.", chinese: "鸟儿在天空中飞。" }, { english: "I want to fly like a bird.", chinese: "我想像鸟一样飞。" }] },
    { id: 21, word: "CRY", meaning: "哭", emoji: "😢", sentences: [{ english: "The baby is crying.", chinese: "宝宝在哭。" }, { english: "Don't cry, be happy!", chinese: "别哭，要开心！" }] },
    { id: 22, word: "TRY", meaning: "尝试", emoji: "💪", sentences: [{ english: "Try your best!", chinese: "尽你最大的努力！" }, { english: "I will try again.", chinese: "我会再试一次。" }] },
    { id: 23, word: "EYE", meaning: "眼睛", emoji: "👁️", sentences: [{ english: "I have two eyes.", chinese: "我有两只眼睛。" }, { english: "She has beautiful eyes.", chinese: "她有美丽的眼睛。" }] },
    { id: 24, word: "MOP", meaning: "拖把", emoji: "🧹", sentences: [{ english: "I use a mop to clean the floor.", chinese: "我用拖把清洁地板。" }, { english: "The mop is in the bathroom.", chinese: "拖把在浴室里。" }] },
    { id: 25, word: "TOP", meaning: "顶部", emoji: "⬆️", sentences: [{ english: "I am at the top of the hill.", chinese: "我在山顶上。" }, { english: "The book is on the top shelf.", chinese: "书在最高的架子上。" }] },
    { id: 26, word: "POP", meaning: "流行音乐", emoji: "🎵", sentences: [{ english: "I like pop music.", chinese: "我喜欢流行音乐。" }, { english: "She sings pop songs.", chinese: "她唱流行歌曲。" }] },
    { id: 27, word: "HOT", meaning: "热的", emoji: "🔥", sentences: [{ english: "The soup is very hot.", chinese: "汤非常热。" }, { english: "It is hot today.", chinese: "今天很热。" }] },
    { id: 28, word: "LOT", meaning: "许多", emoji: "📚", sentences: [{ english: "I have a lot of friends.", chinese: "我有很多朋友。" }, { english: "Thank you a lot!", chinese: "非常感谢！" }] },
    { id: 29, word: "JAM", meaning: "果酱", emoji: "🍯", sentences: [{ english: "I like strawberry jam.", chinese: "我喜欢草莓果酱。" }, { english: "She spreads jam on bread.", chinese: "她在面包上涂果酱。" }] },
    { id: 30, word: "VAN", meaning: "货车", emoji: "🚐", sentences: [{ english: "The van is very big.", chinese: "货车很大。" }, { english: "My dad drives a van.", chinese: "我爸爸开货车。" }] },
    { id: 31, word: "FAN", meaning: "风扇", emoji: "🌀", sentences: [{ english: "Turn on the fan, please.", chinese: "请打开风扇。" }, { english: "I am a big fan of soccer.", chinese: "我是足球迷。" }] },
    { id: 32, word: "PAN", meaning: "平底锅", emoji: "🍳", sentences: [{ english: "I cook eggs in a pan.", chinese: "我用平底锅煎鸡蛋。" }, { english: "The pan is very hot.", chinese: "平底锅很烫。" }] },
    { id: 33, word: "MAN", meaning: "男人", emoji: "👨", sentences: [{ english: "The man is tall.", chinese: "这个男人很高。" }, { english: "He is a good man.", chinese: "他是一个好人。" }] },
    { id: 34, word: "RAN", meaning: "跑", emoji: "🏃", sentences: [{ english: "I ran very fast.", chinese: "我跑得很快。" }, { english: "The boy ran to school.", chinese: "男孩跑着去学校。" }] },
    { id: 35, word: "WAN", meaning: "渴望", emoji: "🌙", sentences: [{ english: "I wan to go home.", chinese: "我想回家。" }, { english: "She wan a new dress.", chinese: "她想要一条新裙子。" }] },
    { id: 36, word: "ZOO", meaning: "动物园", emoji: "🦁", sentences: [{ english: "I went to the zoo yesterday.", chinese: "昨天我去动物园了。" }, { english: "The zoo has many animals.", chinese: "动物园有很多动物。" }] },
    { id: 37, word: "SEA", meaning: "大海", emoji: "🌊", sentences: [{ english: "The sea is very beautiful.", chinese: "大海非常美丽。" }, { english: "I like swimming in the sea.", chinese: "我喜欢在海里游泳。" }] },
    { id: 38, word: "TEA", meaning: "茶", emoji: "🍵", sentences: [{ english: "I drink tea every morning.", chinese: "我每天早上喝茶。" }, { english: "Would you like some tea?", chinese: "你想喝茶吗？" }] },
    { id: 39, word: "DAY", meaning: "天", emoji: "🌞", sentences: [{ english: "Today is a good day.", chinese: "今天是个好日子。" }, { english: "What day is it today?", chinese: "今天是星期几？" }] },
    { id: 40, word: "SAY", meaning: "说", emoji: "🗣️", sentences: [{ english: "What did you say?", chinese: "你说什么？" }, { english: "She says hello to me.", chinese: "她向我问好。" }] },
    { id: 41, word: "WAY", meaning: "路", emoji: "🛤️", sentences: [{ english: "This is the way to school.", chinese: "这是去学校的路。" }, { english: "I lost my way.", chinese: "我迷路了。" }] },
    { id: 42, word: "PAY", meaning: "支付", emoji: "💰", sentences: [{ english: "I need to pay for this.", chinese: "我需要支付这个。" }, { english: "How much did you pay?", chinese: "你花了多少钱？" }] },
    { id: 43, word: "LAY", meaning: "放置", emoji: "🥚", sentences: [{ english: "The hen lays an egg.", chinese: "母鸡下蛋。" }, { english: "Lay the book on the table.", chinese: "把书放在桌子上。" }] },
    { id: 44, word: "RAY", meaning: "光线", emoji: "☀️", sentences: [{ english: "The sun ray is warm.", chinese: "阳光很温暖。" }, { english: "A ray of light came through the window.", chinese: "一道光线透过窗户照进来。" }] },
    { id: 45, word: "GUM", meaning: "口香糖", emoji: "🍬", sentences: [{ english: "I chew gum every day.", chinese: "我每天嚼口香糖。" }, { english: "Do you like bubble gum?", chinese: "你喜欢泡泡糖吗？" }] },
    { id: 46, word: "HAM", meaning: "火腿", emoji: "🍖", sentences: [{ english: "I like ham and eggs.", chinese: "我喜欢火腿和鸡蛋。" }, { english: "Ham comes from pigs.", chinese: "火腿来自猪。" }] },
    { id: 47, word: "RAM", meaning: "公羊", emoji: "🐏", sentences: [{ english: "The ram is strong.", chinese: "公羊很强壮。" }, { english: "I saw a ram on the hill.", chinese: "我在山上看到一只公羊。" }] },
    { id: 48, word: "WED", meaning: "结婚", emoji: "💒", sentences: [{ english: "They will wed next month.", chinese: "他们下个月结婚。" }, { english: "The wedding is beautiful.", chinese: "婚礼很美丽。" }] },
    { id: 49, word: "RED", meaning: "红色", emoji: "🔴", sentences: [{ english: "The apple is red.", chinese: "苹果是红色的。" }, { english: "I like the red dress.", chinese: "我喜欢红色的连衣裙。" }] },
    { id: 50, word: "BED", meaning: "床", emoji: "🛏️", sentences: [{ english: "I go to bed early.", chinese: "我早点睡觉。" }, { english: "The bed is very comfortable.", chinese: "床很舒服。" }] }
  ],

  // 幼儿园 - 4-5个字母
  2: [
    { id: 13, word: "APPLE", meaning: "苹果", emoji: "🍎", sentences: [{ english: "I eat a red apple every day.", chinese: "我每天吃一个红苹果。" }, { english: "An apple a day keeps the doctor away.", chinese: "一天一苹果，医生远离我。" }] },
    { id: 14, word: "BEACH", meaning: "海滩", emoji: "🏖️", sentences: [{ english: "We play on the beach.", chinese: "我们在海滩上玩。" }, { english: "The beach is very beautiful.", chinese: "海滩非常美丽。" }] },
    { id: 15, word: "BREAD", meaning: "面包", emoji: "🍞", sentences: [{ english: "I like eating bread for breakfast.", chinese: "我喜欢早餐吃面包。" }, { english: "This bread is fresh and delicious.", chinese: "这个面包新鲜又好吃。" }] },
    { id: 16, word: "CHAIR", meaning: "椅子", emoji: "🪑", sentences: [{ english: "Please sit on this chair.", chinese: "请坐在这把椅子上。" }, { english: "The chair is very comfortable.", chinese: "这把椅子很舒服。" }] },
    { id: 17, word: "CLOUD", meaning: "云", emoji: "☁️", sentences: [{ english: "The cloud looks like a cotton.", chinese: "云朵像棉花一样。" }, { english: "I see fluffy clouds in the sky.", chinese: "我看到天空中有蓬松的云。" }] },
    { id: 18, word: "DANCE", meaning: "跳舞", emoji: "💃", sentences: [{ english: "I love to dance with music.", chinese: "我喜欢随着音乐跳舞。" }, { english: "She dances very beautifully.", chinese: "她舞跳得非常美。" }] },
    { id: 19, word: "DRESS", meaning: "连衣裙", emoji: "👗", sentences: [{ english: "She wears a pretty dress.", chinese: "她穿着一件漂亮的连衣裙。" }, { english: "I want a new dress for my birthday.", chinese: "我想要一件新连衣裙作为生日礼物。" }] },
    { id: 20, word: "EARTH", meaning: "地球", emoji: "🌍", sentences: [{ english: "The Earth goes around the sun.", chinese: "地球绕着太阳转。" }, { english: "We must protect our Earth.", chinese: "我们必须保护我们的地球。" }] },
    { id: 21, word: "FRUIT", meaning: "水果", emoji: "🍓", sentences: [{ english: "I eat fresh fruit every day.", chinese: "我每天吃新鲜水果。" }, { english: "Fruit is good for your health.", chinese: "水果对你的健康有益。" }] },
    { id: 22, word: "GHOST", meaning: "鬼", emoji: "👻", sentences: [{ english: "The ghost is not real.", chinese: "鬼不是真的。" }, { english: "Children love Halloween ghosts.", chinese: "孩子们喜欢万圣节的鬼。" }] },
    { id: 23, word: "GRAPE", meaning: "葡萄", emoji: "🍇", sentences: [{ english: "I like eating purple grapes.", chinese: "我喜欢吃紫色的葡萄。" }, { english: "Grapes grow on vines.", chinese: "葡萄生长在藤蔓上。" }] },
    { id: 24, word: "HORSE", meaning: "马", emoji: "🐴", sentences: [{ english: "The horse runs very fast.", chinese: "马跑得非常快。" }, { english: "I want to ride a horse someday.", chinese: "我想有一天能骑马。" }] },
    { id: 25, word: "HOUSE", meaning: "房子", emoji: "🏠", sentences: [{ english: "I live in a big house.", chinese: "我住在一个大房子里。" }, { english: "The house has three bedrooms.", chinese: "这房子有三间卧室。" }] },
    { id: 26, word: "TIGER", meaning: "老虎", emoji: "🐯", sentences: [{ english: "The tiger is the king of the forest.", chinese: "老虎是森林之王。" }, { english: "I saw a tiger at the zoo.", chinese: "我在动物园看到一只老虎。" }] },
    { id: 27, word: "ZEBRA", meaning: "斑马", emoji: "🦓", sentences: [{ english: "The zebra has black and white stripes.", chinese: "斑马有黑白相间的条纹。" }, { english: "Zebras live in Africa.", chinese: "斑马生活在非洲。" }] },
    { id: 28, word: "LION", meaning: "狮子", emoji: "🦁", sentences: [{ english: "The lion is the king of animals.", chinese: "狮子是动物之王。" }, { english: "I saw a lion at the zoo.", chinese: "我在动物园看到一只狮子。" }] },
    { id: 29, word: "BEAR", meaning: "熊", emoji: "🐻", sentences: [{ english: "The bear likes honey.", chinese: "熊喜欢蜂蜜。" }, { english: "I saw a bear in the forest.", chinese: "我在森林里看到一只熊。" }] },
    { id: 30, word: "DUCK", meaning: "鸭子", emoji: "🦆", sentences: [{ english: "The duck can swim.", chinese: "鸭子会游泳。" }, { english: "I feed the ducks at the pond.", chinese: "我在池塘边喂鸭子。" }] },
    { id: 31, word: "FROG", meaning: "青蛙", emoji: "🐸", sentences: [{ english: "The frog can jump very high.", chinese: "青蛙跳得很高。" }, { english: "I saw a frog near the pond.", chinese: "我在池塘边看到一只青蛙。" }] },
    { id: 32, word: "SNAKE", meaning: "蛇", emoji: "🐍", sentences: [{ english: "The snake is long.", chinese: "蛇很长。" }, { english: "I am afraid of snakes.", chinese: "我害怕蛇。" }] },
    { id: 33, word: "MOUSE", meaning: "老鼠", emoji: "🐭", sentences: [{ english: "The mouse is small.", chinese: "老鼠很小。" }, { english: "The mouse likes cheese.", chinese: "老鼠喜欢奶酪。" }] },
    { id: 34, word: "SHEEP", meaning: "绵羊", emoji: "🐑", sentences: [{ english: "The sheep has wool.", chinese: "绵羊有羊毛。" }, { english: "I saw many sheep on the farm.", chinese: "我在农场看到很多绵羊。" }] },
    { id: 35, word: "TURTLE", meaning: "乌龟", emoji: "🐢", sentences: [{ english: "The turtle is slow.", chinese: "乌龟爬得很慢。" }, { english: "I have a pet turtle.", chinese: "我有一只宠物乌龟。" }] },
    { id: 36, word: "SHARK", meaning: "鲨鱼", emoji: "🦈", sentences: [{ english: "The shark is dangerous.", chinese: "鲨鱼很危险。" }, { english: "Sharks live in the ocean.", chinese: "鲨鱼生活在海洋里。" }] },
    { id: 37, word: "WHALE", meaning: "鲸鱼", emoji: "🐋", sentences: [{ english: "The whale is very big.", chinese: "鲸鱼非常大。" }, { english: "Whales live in the ocean.", chinese: "鲸鱼生活在海洋里。" }] },
    { id: 38, word: "GIRAFFE", meaning: "长颈鹿", emoji: "🦒", sentences: [{ english: "The giraffe has a long neck.", chinese: "长颈鹿有很长的脖子。" }, { english: "Giraffes eat leaves from trees.", chinese: "长颈鹿吃树叶。" }] },
    { id: 39, word: "PANDA", meaning: "熊猫", emoji: "🐼", sentences: [{ english: "Pandas are very cute.", chinese: "熊猫非常可爱。" }, { english: "Pandas come from China.", chinese: "熊猫来自中国。" }] },
    { id: 40, word: "KOALA", meaning: "考拉", emoji: "��", sentences: [{ english: "Koalas live in Australia.", chinese: "考拉生活在澳大利亚。" }, { english: "Koalas sleep a lot.", chinese: "考拉很爱睡觉。" }] },
    { id: 41, word: "BIRD", meaning: "鸟", emoji: "🐦", sentences: [{ english: "The bird can fly.", chinese: "鸟会飞。" }, { english: "I saw a beautiful bird in the tree.", chinese: "我在树上看到一只美丽的鸟。" }] },
    { id: 42, word: "FISH", meaning: "鱼", emoji: "🐟", sentences: [{ english: "The fish can swim.", chinese: "鱼会游泳。" }, { english: "I have a pet fish.", chinese: "我有一条宠物鱼。" }] },
    { id: 43, word: "STAR", meaning: "星星", emoji: "⭐", sentences: [{ english: "The star is very bright.", chinese: "星星非常明亮。" }, { english: "I see many stars at night.", chinese: "晚上我看到很多星星。" }] },
    { id: 44, word: "BALL", meaning: "球", emoji: "⚽", sentences: [{ english: "I like to play with a ball.", chinese: "我喜欢玩球。" }, { english: "The ball is round.", chinese: "球是圆的。" }] },
    { id: 45, word: "TREE", meaning: "树", emoji: "🌳", sentences: [{ english: "The tree is very tall.", chinese: "树很高。" }, { english: "Birds live in the tree.", chinese: "鸟住在树上。" }] },
    { id: 46, word: "RAIN", meaning: "雨", emoji: "🌧️", sentences: [{ english: "It is raining outside.", chinese: "外面正在下雨。" }, { english: "I like to listen to the rain.", chinese: "我喜欢听雨声。" }] },
    { id: 47, word: "WIND", meaning: "风", emoji: "💨", sentences: [{ english: "The wind is blowing.", chinese: "风正在吹。" }, { english: "The wind is very strong today.", chinese: "今天风很大。" }] },
    { id: 48, word: "SNOW", meaning: "雪", emoji: "❄️", sentences: [{ english: "It is snowing outside.", chinese: "外面正在下雪。" }, { english: "Children love to play in the snow.", chinese: "孩子们喜欢在雪里玩。" }] },
    { id: 49, word: "FIRE", meaning: "火", emoji: "🔥", sentences: [{ english: "Fire is very hot.", chinese: "火很热。" }, { english: "Be careful with fire.", chinese: "小心火烛。" }] },
    { id: 50, word: "WATER", meaning: "水", emoji: "💧", sentences: [{ english: "Water is very important.", chinese: "水非常重要。" }, { english: "I drink water every day.", chinese: "我每天喝水。" }] }
  ],

  // 小学 - 5-7个字母
  3: [
    { id: 26, word: "BANANA", meaning: "香蕉", emoji: "🍌", sentences: [{ english: "Monkeys love to eat bananas.", chinese: "猴子喜欢吃香蕉。" }, { english: "I had a banana for breakfast.", chinese: "我早餐吃了一根香蕉。" }] },
    { id: 27, word: "ORANGE", meaning: "橙子", emoji: "🍊", sentences: [{ english: "An orange is a kind of fruit.", chinese: "橙子是一种水果。" }, { english: "I peel the orange before eating.", chinese: "我吃橙子前先剥皮。" }] },
    { id: 28, word: "ANIMAL", meaning: "动物", emoji: "🦁", sentences: [{ english: "A dog is a friendly animal.", chinese: "狗是一种友好的动物。" }, { english: "We should protect wild animals.", chinese: "我们应该保护野生动物。" }] },
    { id: 29, word: "PLANET", meaning: "行星", emoji: "🪐", sentences: [{ english: "Earth is a planet in our solar system.", chinese: "地球是我们太阳系中的一颗行星。" }, { english: "Mars is the fourth planet from the sun.", chinese: "火星是距离太阳第四颗行星。" }] },
    { id: 30, word: "FLOWER", meaning: "花", emoji: "🌸", sentences: [{ english: "The flower smells very sweet.", chinese: "这朵花闻起来很香。" }, { english: "She gave me a beautiful flower.", chinese: "她送我一朵美丽的花。" }] },
    { id: 31, word: "FRIEND", meaning: "朋友", emoji: "👫", sentences: [{ english: "She is my best friend.", chinese: "她是我最好的朋友。" }, { english: "I made a new friend at school.", chinese: "我在学校认识了一个新朋友。" }] },
    { id: 32, word: "GARDEN", meaning: "花园", emoji: "🌻", sentences: [{ english: "My grandmother has a beautiful garden.", chinese: "我奶奶有一个美丽的花园。" }, { english: "There are many flowers in the garden.", chinese: "花园里有许多花。" }] },
    { id: 33, word: "MONKEY", meaning: "猴子", emoji: "🐵", sentences: [{ english: "The monkey is climbing the tree.", chinese: "猴子正在爬树。" }, { english: "Monkeys are very clever animals.", chinese: "猴子是非常聪明的动物。" }] },
    { id: 34, word: "RABBIT", meaning: "兔子", emoji: "🐰", sentences: [{ english: "The rabbit has long ears.", chinese: "兔子有长长的耳朵。" }, { english: "I want a pet rabbit.", chinese: "我想要一只宠物兔子。" }] },
    { id: 35, word: "SCHOOL", meaning: "学校", emoji: "🏫", sentences: [{ english: "I go to school every weekday.", chinese: "我每个工作日都去学校。" }, { english: "School starts at eight o'clock.", chinese: "学校八点开始上课。" }] },
    { id: 36, word: "SUMMER", meaning: "夏天", emoji: "🌞", sentences: [{ english: "Summer is the hottest season.", chinese: "夏天是最热的季节。" }, { english: "I like swimming in summer.", chinese: "我喜欢在夏天游泳。" }] },
    { id: 37, word: "WINTER", meaning: "冬天", emoji: "❄️", sentences: [{ english: "Winter is very cold.", chinese: "冬天非常寒冷。" }, { english: "It often snows in winter.", chinese: "冬天经常下雪。" }] },
    { id: 38, word: "WINDOW", meaning: "窗户", emoji: "🪟", sentences: [{ english: "Please open the window.", chinese: "请打开窗户。" }, { english: "I can see the garden through the window.", chinese: "我能通过窗户看到花园。" }] },
    { id: 39, word: "MANGO", meaning: "芒果", emoji: "🥭", sentences: [{ english: "Mango is my favorite fruit.", chinese: "芒果是我最喜欢的水果。" }, { english: "This mango is very sweet.", chinese: "这个芒果很甜。" }] },
    { id: 40, word: "LEMON", meaning: "柠檬", emoji: "🍋", sentences: [{ english: "Lemon is sour but healthy.", chinese: "柠檬酸但健康。" }, { english: "I like lemon tea.", chinese: "我喜欢柠檬茶。" }] },
    { id: 41, word: "CHERRY", meaning: "樱桃", emoji: "🍒", sentences: [{ english: "Cherries are red and sweet.", chinese: "樱桃又红又甜。" }, { english: "I picked many cherries.", chinese: "我摘了很多樱桃。" }] },
    { id: 42, word: "MELON", meaning: "瓜", emoji: "🍈", sentences: [{ english: "The melon is very fresh.", chinese: "这个瓜很新鲜。" }, { english: "I like eating watermelon.", chinese: "我喜欢吃西瓜。" }] },
    { id: 43, word: "COOKIE", meaning: "饼干", emoji: "🍪", sentences: [{ english: "I like chocolate cookies.", chinese: "我喜欢巧克力饼干。" }, { english: "These cookies are delicious.", chinese: "这些饼干很好吃。" }] },
    { id: 44, word: "BUTTER", meaning: "黄油", emoji: "🧈", sentences: [{ english: "I spread butter on bread.", chinese: "我在面包上涂黄油。" }, { english: "Butter comes from milk.", chinese: "黄油来自牛奶。" }] },
    { id: 45, word: "CASTLE", meaning: "城堡", emoji: "🏰", sentences: [{ english: "The castle is very old.", chinese: "城堡很古老。" }, { english: "I want to live in a castle.", chinese: "我想住在城堡里。" }] },
    { id: 46, word: "BRIDGE", meaning: "桥", emoji: "🌉", sentences: [{ english: "The bridge is very long.", chinese: "桥很长。" }, { english: "We crossed the bridge.", chinese: "我们过了桥。" }] },
    { id: 47, word: "CASTLE", meaning: "城堡", emoji: "🏰", sentences: [{ english: "The castle is very beautiful.", chinese: "城堡非常美丽。" }, { english: "Princes live in castles.", chinese: "王子住在城堡里。" }] },
    { id: 48, word: "KITCHEN", meaning: "厨房", emoji: "🍳", sentences: [{ english: "My mother cooks in the kitchen.", chinese: "妈妈在厨房做饭。" }, { english: "The kitchen is very clean.", chinese: "厨房很干净。" }] },
    { id: 49, word: "BATHROOM", meaning: "浴室", emoji: "🚿", sentences: [{ english: "I take a shower in the bathroom.", chinese: "我在浴室洗澡。" }, { english: "The bathroom is clean.", chinese: "浴室很干净。" }] },
    { id: 50, word: "BEDROOM", meaning: "卧室", emoji: "🛏️", sentences: [{ english: "My bedroom is very comfortable.", chinese: "我的卧室很舒适。" }, { english: "I sleep in my bedroom.", chinese: "我在卧室睡觉。" }] },
    { id: 51, word: "DINNER", meaning: "晚餐", emoji: "🍝", sentences: [{ english: "We have dinner together.", chinese: "我们一起吃晚餐。" }, { english: "Dinner is ready.", chinese: "晚餐准备好了。" }] },
    { id: 52, word: "BREAKFAST", meaning: "早餐", emoji: "🥣", sentences: [{ english: "I eat breakfast every morning.", chinese: "我每天早上吃早餐。" }, { english: "Breakfast is the most important meal.", chinese: "早餐是最重要的一餐。" }] },
    { id: 53, word: "LUNCH", meaning: "午餐", emoji: "🥪", sentences: [{ english: "I have lunch at school.", chinese: "我在学校吃午餐。" }, { english: "What do you want for lunch?", chinese: "你午餐想吃什么？" }] },
    { id: 54, word: "ORANGE", meaning: "橙色", emoji: "🟠", sentences: [{ english: "I like the color orange.", chinese: "我喜欢橙色。" }, { english: "She is wearing an orange dress.", chinese: "她穿着橙色的连衣裙。" }] },
    { id: 55, word: "PURPLE", meaning: "紫色", emoji: "🟣", sentences: [{ english: "Purple is a beautiful color.", chinese: "紫色是一种美丽的颜色。" }, { english: "I have a purple backpack.", chinese: "我有一个紫色的背包。" }] },
    { id: 56, word: "YELLOW", meaning: "黄色", emoji: "🟡", sentences: [{ english: "The sun is yellow.", chinese: "太阳是黄色的。" }, { english: "I like yellow flowers.", chinese: "我喜欢黄色的花。" }] },
    { id: 57, word: "GREEN", meaning: "绿色", emoji: "🟢", sentences: [{ english: "Grass is green.", chinese: "草是绿色的。" }, { english: "I like green color.", chinese: "我喜欢绿色。" }] },
    { id: 58, word: "SILVER", meaning: "银色", emoji: "🥈", sentences: [{ english: "The medal is silver.", chinese: "奖牌是银色的。" }, { english: "She has silver hair.", chinese: "她有银色的头发。" }] },
    { id: 59, word: "GOLDEN", meaning: "金色", emoji: "🥇", sentences: [{ english: "The award is golden.", chinese: "奖项是金色的。" }, { english: "The sunset looks golden.", chinese: "夕阳看起来金灿灿的。" }] },
    { id: 60, word: "ORANGE", meaning: "橙子", emoji: "🍊", sentences: [{ english: "An orange is round.", chinese: "橙子是圆的。" }, { english: "I peeled the orange.", chinese: "我剥了橙子。" }] }
  ],

  // 中学 - 7-9个字母
  4: [
    {
      id: 39,
      word: "LIBRARY",
      meaning: "图书馆",
      emoji: "📚",
      sentences: [
        { english: "I often study in the library.", chinese: "我经常在图书馆学习。" },
        { english: "The library has many interesting books.", chinese: "图书馆有很多有趣的书。" }
      ]
    },
    {
      id: 40,
      word: "TEACHER",
      meaning: "老师",
      emoji: "👩‍🏫",
      sentences: [
        { english: "My teacher is very kind.", chinese: "我的老师很善良。" },
        { english: "The teacher explains the lesson clearly.", chinese: "老师清晰地讲解课程。" }
      ]
    },
    {
      id: 41,
      word: "FAMILY",
      meaning: "家人",
      emoji: "👨‍👩‍👧",
      sentences: [
        { english: "My family loves me very much.", chinese: "我的家人非常爱我。" },
        { english: "I spend weekends with my family.", chinese: "我和家人一起过周末。" }
      ]
    },
    {
      id: 42,
      word: "KANGAROO",
      meaning: "袋鼠",
      emoji: "🦘",
      sentences: [
        { english: "Kangaroos come from Australia.", chinese: "袋鼠来自澳大利亚。" },
        { english: "A baby kangaroo lives in its mother's pouch.", chinese: "小袋鼠住在妈妈的育儿袋里。" }
      ]
    },
    {
      id: 43,
      word: "ELEPHANT",
      meaning: "大象",
      emoji: "🐘",
      sentences: [
        { english: "The elephant has a long trunk.", chinese: "大象有长长的鼻子。" },
        { english: "Elephants are the largest land animals.", chinese: "大象是最大的陆地动物。" }
      ]
    },
    {
      id: 44,
      word: "BUTTERFLY",
      meaning: "蝴蝶",
      emoji: "🦋",
      sentences: [
        { english: "The butterfly has beautiful wings.", chinese: "蝴蝶有美丽的翅膀。" },
        { english: "I saw a colorful butterfly in the garden.", chinese: "我在花园里看到一只彩色的蝴蝶。" }
      ]
    },
    {
      id: 45,
      word: "VACATION",
      meaning: "假期",
      emoji: "🏖️",
      sentences: [
        { english: "I went on vacation with my family.", chinese: "我和家人一起去度假。" },
        { english: "Summer vacation is coming soon.", chinese: "暑假即将到来。" }
      ]
    },
    {
      id: 46,
      word: "COUNTRY",
      meaning: "国家",
      emoji: "🌍",
      sentences: [
        { english: "China is a beautiful country.", chinese: "中国是一个美丽的国家。" },
        { english: "There are many countries in the world.", chinese: "世界上有很多国家。" }
      ]
    },
    {
      id: 47,
      word: "DOLPHIN",
      meaning: "海豚",
      emoji: "🐬",
      sentences: [
        { english: "Dolphins are very intelligent.", chinese: "海豚非常聪明。" },
        { english: "I saw dolphins swimming in the ocean.", chinese: "我看到海豚在海里游泳。" }
      ]
    },
    {
      id: 48,
      word: "SCIENCE",
      meaning: "科学",
      emoji: "🔬",
      sentences: [
        { english: "I love science class.", chinese: "我喜欢科学课。" },
        { english: "Science helps us understand the world.", chinese: "科学帮助我们了解世界。" }
      ]
    },
    {
      id: 49,
      word: "PINEAPPLE",
      meaning: "菠萝",
      emoji: "🍍",
      sentences: [
        { english: "Pineapple is a tropical fruit.", chinese: "菠萝是一种热带水果。" },
        { english: "I like the sweet taste of pineapple.", chinese: "我喜欢菠萝的甜味。" }
      ]
    },
    {
      id: 50,
      word: "UMBRELLA",
      meaning: "雨伞",
      emoji: "☂️",
      sentences: [
        { english: "I use an umbrella when it rains.", chinese: "下雨时我使用雨伞。" },
        { english: "The umbrella keeps me dry in the rain.", chinese: "雨伞在雨中让我保持干燥。" }
      ]
    },
    {
      id: 51,
      word: "WONDERFUL",
      meaning: "精彩的",
      emoji: "✨",
      sentences: [
        { english: "That was a wonderful movie!", chinese: "那是一部精彩的电影！" },
        { english: "We had a wonderful time at the party.", chinese: "我们在派对上度过了美好的时光。" }
      ]
    },
    {
      id: 52,
      word: "CHOCOLATE",
      meaning: "巧克力",
      emoji: "🍫",
      sentences: [
        { english: "I love eating chocolate.", chinese: "我喜欢吃巧克力。" },
        { english: "Chocolate is made from cocoa beans.", chinese: "巧克力是由可可豆制成的。" }
      ]
    }
  ]
};

// 难度级别信息
const levelInfo = {
  1: { name: "入门", minLetters: 3, maxLetters: 3 },
  2: { name: "幼儿园", minLetters: 4, maxLetters: 5 },
  3: { name: "小学", minLetters: 5, maxLetters: 7 },
  4: { name: "中学", minLetters: 7, maxLetters: 9 }
};

// 导出供游戏使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { wordsData, levelInfo };
}
