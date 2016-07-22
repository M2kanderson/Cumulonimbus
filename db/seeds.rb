# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

titles = ["String Quartet No. 4, Sz. 91: II. Prestissimo (Excerpt)", "Do You Like Cs", "Hope (feat. BR/\VE)", "Mr. Misunderstood", "Mi Dia (feat. Qd)", "Whxt Txrns U Xn?", "Slipping Away - Ted Nights Remix", "Hey QT", "If It Ain't Love", "Qotto - Original Mix", "Never Could Decieve You - Original Mix", "Ayechkid-iw", "Petal to the Maxx", "Let's Go Gertrudis", "Billie Jean - Single Version", "Do I Wanna Know?", "OD", "KK (feat. Project Pat & Juicy J)", "Get TF Out My Face (feat. Young Thug)",
  "Naa Ji Naa", "Cumbia Del Sol", "Erhu - Original Mix", "Anchors Aweigh (The U.S. Navy Song) (Arr. W.J. Dunn)", "Qotto - Original Mix", "Hx Cx Ix", "Strange Storm", "Bo Fo Sho (live)", "XO", "#Better (feat. KR)", "My Heart", "Wa-Do-Dem", "DUELE EL CORAZON", "I Can Go the Distance", "Bosozoku GF", "Tek Yu Hand from Yu Jaw", "My House", "Gangster", "Oy Vey", "Ow! (Splidao!) [I Like It, Though]",
  "Studio", "Nabza Göre Şerbet", "No EQ", "Do You Like Cs", "Mosquito - Hz Mix", "Wu-Tang Forever",
  "Hello Bitches", "Night and Day", "I Love Myself", "Brood and Roaring Fires", "Get It Up - Sitone Radio Edit", "Love No Less Worthy", "Tarzan lo fa", "A.I.", "Sa - Obey", "Playa", "Cut It (feat. Young Dolph)", "La Grange - 2005 Remastered Version", "You & Me", "El Amor De Su Vida", "My House", "Cello Concerto in A major, Wq. 172: I. Allegro di molto", "Zi-Zi's Journey", "Take A Letter, Maria", "Take A Letter, Maria", "Bring It On",
  "Tummy, Tummy", "La Noche de los Poetas Muertos (feat. Lirika Inverza)", "Eb Bayshidi", "Lexicon Devil", "Before He Cheats", "No Good", "Warm", "Fog On The Tyne - Live at Sirius XM Studios, New York, NY, August 08, 2012", "01. QM - Man of the Year (Prod. by Kid Ant)", "Yours (feat. Pb Kaya)", "VW Slash Guitar", "Gangsta's Paradise (feat. L.V.)", "Where Ya At", "Thunderstruck", "Fairy Tail Main Theme (dj-Jo Remix)", "Electric Night", "King Sh*t", "Stop Forgetting Who You Really Are - Original Mix", "Bells Bleed & Bloom", "When We Were Young",
  "King Sh*t", "Like a Ship", "My Game", "RR - Outtake from 'Blizzard Of Ozz' Sessions", "Ps & Qs", "Clockwork (feat. Roqy Tyraid & Ichiban)", "Back on E (feat. Cap 1, Vl Deck & Bleu Davinci)", "Kd", "Na Na", "No L's", "Druggys Wit Hoes Again (feat. Ab Soul)", "Over the Rainbow", "Young And Beautiful - DH Orchestral Version", "In Da Club", "Needed Me"]

audio_urls = ["https://p.scdn.co/mp3-preview/ecbc9bbabb4601731182b5d046d5a23df170032d", "https://p.scdn.co/mp3-preview/41757948a4453518a3c4b130dec0e0b588e3f21e", "https://p.scdn.co/mp3-preview/26fac7df3479da1e434cd2ce4d562c707a227f4d", "https://p.scdn.co/mp3-preview/2ca1bc20eede0199cc379aa4430d9adc3620d18b", "https://p.scdn.co/mp3-preview/e336bf556c0ed8b2c207c412efefad1a317eef3f", "https://p.scdn.co/mp3-preview/265687d7d5df0da00e1de8f38a6820e67a0605f1", "https://p.scdn.co/mp3-preview/0eb5c5c88b59f2c428121fdca5330e8eb26e3f89",
  "https://p.scdn.co/mp3-preview/e978dcb2f53bf77184cd4d61cd927ab584bcbcf4", "https://p.scdn.co/mp3-preview/3222d9a828cedd3cd4c16fe748ddbc10460c6828", "https://p.scdn.co/mp3-preview/62dc2fb111ea9d36e63779aed2416b86d2fe4cd1", "https://p.scdn.co/mp3-preview/748aa78bc611c0c618eff2fa93a37d638bbdfae7", "https://p.scdn.co/mp3-preview/1286e64a9e2776b8f5a4dad4310d46ad7050593b", "https://p.scdn.co/mp3-preview/a1adf1fa3ae75f385f782a5144d390840ede47be", "https://p.scdn.co/mp3-preview/6b0a15ad676ff00268e8ecc403b80b5f1bc4a06e",
  "https://p.scdn.co/mp3-preview/4eb779428d40d579f14d12a9daf98fc66c7d0be4", "https://p.scdn.co/mp3-preview/ae9cfce1f3fae26c3730299b729fa7c9bfff410d", "https://p.scdn.co/mp3-preview/b22d57733aeedc02736e1adc255a474b7b832d29", "https://p.scdn.co/mp3-preview/cc682063801407d194bf42b70da17109b84719f6", "https://p.scdn.co/mp3-preview/026ab1e5c8d1ed2b5862070fde8ff6c1c22bdd5d", "https://p.scdn.co/mp3-preview/207141836e745f7ce7d541acf5d4b8e0146e2912", "https://p.scdn.co/mp3-preview/87aa8be7cbb565d4504ec03205c3d7697769f2b2",
  "https://p.scdn.co/mp3-preview/409c4a46f605175ca62a33d9a1cdba67758624a8", "https://p.scdn.co/mp3-preview/13badc1200ff0b205ac16f70e47e555efdea789e", "https://p.scdn.co/mp3-preview/62dc2fb111ea9d36e63779aed2416b86d2fe4cd1", "https://p.scdn.co/mp3-preview/14a0aa37a70fbc5c5a8ff2bebc9778d213837f48", "https://p.scdn.co/mp3-preview/3cc61b49633fca19d92f5fd2b65dd2b074ea21a4", "https://p.scdn.co/mp3-preview/aaa08e80539c98ad653899bf8425a4383afc25ff", "https://p.scdn.co/mp3-preview/dbc04767449ffacfdbedaf7bc410103111603295",
  "https://p.scdn.co/mp3-preview/ca76dcaef92d0c0151372fc6ed292409a3eab310", "https://p.scdn.co/mp3-preview/1b772d6180c73fb2a3f9d92c628f40ba223d5278", "https://p.scdn.co/mp3-preview/ce21d8b689e94f2e5b6567fe073e08d1478b2e5c", "https://p.scdn.co/mp3-preview/75617ca01595a155737f82218fe33bd7dde8933f", "https://p.scdn.co/mp3-preview/97b6579fff267bf674ffe48a78f0e2a36689aabb", "https://p.scdn.co/mp3-preview/193570e056ea826cd5e528c958458068ffbe9c05", "https://p.scdn.co/mp3-preview/b80051e6027f951679a1a495c790ef7757dad7db",
  "https://p.scdn.co/mp3-preview/afa94edef4dec2eda16e99153ccd513ef4306d06", "https://p.scdn.co/mp3-preview/7d38997608a2574f00966a396fb09e8dd1480fa0", "https://p.scdn.co/mp3-preview/160e917f1ddc1814cef1f3df7cc8efe86b9d60de", "https://p.scdn.co/mp3-preview/e676440f5b18f19291bc029d6d8b9b67c804e35a", "https://p.scdn.co/mp3-preview/180a9ce3d217f4ac6905aa7fb3d41ffc6b33d81c", "https://p.scdn.co/mp3-preview/a0e0e695a5780ae8956b678ce034d0b7291e0c7a", "https://p.scdn.co/mp3-preview/81a8e62d72245e8c37a5254564f5fd2ed21c0348",
  "https://p.scdn.co/mp3-preview/41757948a4453518a3c4b130dec0e0b588e3f21e", "https://p.scdn.co/mp3-preview/a2f890eda98e9129a634b92bf3af163879143cac", "https://p.scdn.co/mp3-preview/9ac5f019cda792d52a437d6ef31768e07cd5c7aa", "https://p.scdn.co/mp3-preview/a6f622422822188dca0ad53b634a11d26920f774", "https://p.scdn.co/mp3-preview/81c9cce524809c94f2dfac9cf947a31f37711b7d", "https://p.scdn.co/mp3-preview/9595fc766a7eae878942ddf0174d42ea408168e5", "https://p.scdn.co/mp3-preview/a226b235fd5292af885b91ac2cc32b8904bbae92",
  "https://p.scdn.co/mp3-preview/84e34e631cb174fea68f7344528c6ad1bea1518f", "https://p.scdn.co/mp3-preview/0ac7d91994f0775d1f8b9fc4e7945a1acbb7d2f2", "https://p.scdn.co/mp3-preview/e0a40fe9bd903f54a4e21b54a7922e23c3ba70e8", "https://p.scdn.co/mp3-preview/78732c9ef716b7b60562d095b2e0b3edc870c843", "https://p.scdn.co/mp3-preview/b5962007747cbf89bdd3f6b13a0b11105262f14f", "https://p.scdn.co/mp3-preview/69f05240aed96c26e7b435c4ce3cfa56ec46132e", "https://p.scdn.co/mp3-preview/2eabe0da626da88e0fd714b3b1a36a7e36eaf620",
  "https://p.scdn.co/mp3-preview/8eca30041aa528c012a2f0aa2e76eea8c12fd03a", "https://p.scdn.co/mp3-preview/6803dfc68ce6bb694ed264164219bdffa518799f", "https://p.scdn.co/mp3-preview/06b211035fc1421c1bf5a6843f88e320d0a8d1f8", "https://p.scdn.co/mp3-preview/afa94edef4dec2eda16e99153ccd513ef4306d06", "https://p.scdn.co/mp3-preview/8503723cb9a7675f8721f47d4d27e6183456abbf", "https://p.scdn.co/mp3-preview/8cd1f319348621f96ef14a18a9cd902b3e73a6b6", "https://p.scdn.co/mp3-preview/6372f824d4f2a5e1411bc88fd22c1fb75fd923a2",
  "https://p.scdn.co/mp3-preview/6372f824d4f2a5e1411bc88fd22c1fb75fd923a2", "https://p.scdn.co/mp3-preview/9dbb981f9987a7ae9d0aa5d69838bd1cff649322", "https://p.scdn.co/mp3-preview/03d8a2ed513894d0387fe98a5585462b84fe780f", "https://p.scdn.co/mp3-preview/7f06008383c67eca85439ac8488515b80f08a7a6", "https://p.scdn.co/mp3-preview/a7efa931d3ee3ad964c9d3cd2d38be66b9f192a5", "https://p.scdn.co/mp3-preview/f27710f84d89e5a9b3eb3647166535204519f2de", "https://p.scdn.co/mp3-preview/b61f1fd8811b6c9bd9d5d0b47c35175aba787201",
  "https://p.scdn.co/mp3-preview/b4b50a2d3ca984e4241f6d611c9cf630cbd3df6c", "https://p.scdn.co/mp3-preview/93c64b0ba4c47507401d31a00866b1a3427a5f2b", "https://p.scdn.co/mp3-preview/98c3ae3de7dcfeb337a46fba572273a7957fbe8b", "https://p.scdn.co/mp3-preview/82fb71c75da57a9890d14872ec2b757d17c948c9", "https://p.scdn.co/mp3-preview/4063638de713a3af077128b7e2c0fdb230c00e7c", "https://p.scdn.co/mp3-preview/84bf53fedc83584ef8c7e2d77ab23fbdaa948d7f", "https://p.scdn.co/mp3-preview/48b5db8fc733af67cb187842a1589358607d046c",
  "https://p.scdn.co/mp3-preview/c1e55fccdd81935c9aecdcf1c7677ed8e87f06aa", "https://p.scdn.co/mp3-preview/3885f542871846183fefbd009577c95f5f46b0af", "https://p.scdn.co/mp3-preview/4d9d9d109646783f223843386acf9b71024b464a", "https://p.scdn.co/mp3-preview/9c964d19b6f59802ef33e8bb9d5f24e8c0bdb591", "https://p.scdn.co/mp3-preview/29f8afe8061a6e2003885c215309606d37c74ae5", "https://p.scdn.co/mp3-preview/f4cd7cc4bb5d4dbd7b67db537c9e9f7251712679", "https://p.scdn.co/mp3-preview/4a41f60784f36f28542e3fdccc3b267d98d50409",
  "https://p.scdn.co/mp3-preview/659a35907dfd65e8da36b1f9129415b749eda99f", "https://p.scdn.co/mp3-preview/29f8afe8061a6e2003885c215309606d37c74ae5", "https://p.scdn.co/mp3-preview/0022703debdeb91e8ac7840b7a8942c91c24effe", "https://p.scdn.co/mp3-preview/22444751088f8b2e2e4c7fe02f2ed2bd791e71a4", "https://p.scdn.co/mp3-preview/13614894c7d3e0ea3194f2ed3326e5e7f0ac55ce", "https://p.scdn.co/mp3-preview/7d77647b4ab1747eebe9c5d235dc64d5d9201864", "https://p.scdn.co/mp3-preview/8551e87ca3f117a2bb5d246baa37ce90bc64eb6b",
  "https://p.scdn.co/mp3-preview/c40090b7b2648684f2fe6ab847e1a1c8d5acc096", "https://p.scdn.co/mp3-preview/97db3d691c6646d3504d700fb5786c77afc3a97f", "https://p.scdn.co/mp3-preview/6a0b2756d6d59ba7575d81afb98636db397a3541", "https://p.scdn.co/mp3-preview/15d8bace88e908c51a272cda2aca17147fe00b83", "https://p.scdn.co/mp3-preview/be90b4940a20946225ae0f3b25c3ea58078af8f9", "https://p.scdn.co/mp3-preview/efa050a71295c8fb7e7809f48e67a171aef5704e", "https://p.scdn.co/mp3-preview/f54e9e419719ef8a23d45db26f4f1aebab05d407",
  "https://p.scdn.co/mp3-preview/54633fb1c75af27495e491a0889ddf02ec3ad25e", "https://p.scdn.co/mp3-preview/c37edba61cea297d567dfcbc362a1e69932967d6"]

image_urls = ["https://i.scdn.co/image/8c9ac97eab1481fbfb9fcbb77921f07640483dfc", "https://i.scdn.co/image/e703a398922050fc4de41d58cd21dd191578432a", "https://i.scdn.co/image/a8b555496ccff556a7628db6804cf07dd1cc9a60", "https://i.scdn.co/image/054dfb054d50005bff3bb9f26f53b5245dbd94ed", "https://i.scdn.co/image/edcb0c00c7ceefa9dcdd6e393a7f6ed0c39d14e4", "https://i.scdn.co/image/195e6c8e6ad4986de9f57e5196f043fa696975ff", "https://i.scdn.co/image/2916465cad44aebe4407d1faef50e31f37c4db21", "https://i.scdn.co/image/10c4d1892e9e955b837200e49c120ef3d02b8814",
  "https://i.scdn.co/image/a8b6798df7148b3fcfab613253ee9364c6753fae", "https://i.scdn.co/image/e31b23a3ed265b831f3dd3b423a5c450b29706bc", "https://i.scdn.co/image/b6ff628ed13769f4a8f39bc9d929282c7f882166", "https://i.scdn.co/image/99ea6ae7465eb87106de9be15841b34910cdf756", "https://i.scdn.co/image/fc8294c10e720238812ca86f6f6be638ba0bac51", "https://i.scdn.co/image/924cd2ff7b5ed4976c6fe0890587e91c7bcd1d4d", "https://i.scdn.co/image/6d1d714f4dcb306d3b3533fea400362974060d2d", "https://i.scdn.co/image/956296446175bba4ccdfd6edce8c78e31d8a9add",
  "https://i.scdn.co/image/b2a7bee03c58f0371f0bc18332f92336bdbd9729", "https://i.scdn.co/image/9489952ce12ebe5bc52db3be544f94b2c2a0760b", "https://i.scdn.co/image/28f56817a08c8f292eb357bca5602fb37cb6fdb3", "https://i.scdn.co/image/d35402408b319f3a52e584e53bba42305dfbaa89", "https://i.scdn.co/image/21f9f2212ad09899ad94f0aea822c158d3227d11", "https://i.scdn.co/image/7b335c4aa45581a4f9ea2ab896914b805e57dc52", "https://i.scdn.co/image/fb3574c419de85fb220cd9ca7f6059030ee8d93e", "https://i.scdn.co/image/e31b23a3ed265b831f3dd3b423a5c450b29706bc",
  "https://i.scdn.co/image/88913e6d4ec532eb37ed71090424cf7e4a98c857", "https://i.scdn.co/image/57e588d56d935c2538619a342d2fdd67a52d1d12", "https://i.scdn.co/image/1d56a83400d401be531a83ab11433a1430ec410c", "https://i.scdn.co/image/99fddf38e23f0c51692402bb5ddc6d1ba3bf2283", "https://i.scdn.co/image/acc0fa452d3042012655b3e98b90e9ab2b436a90", "https://i.scdn.co/image/ad035369d852c7c6a573833a811a0794cd01b57c", "https://i.scdn.co/image/ca35dfa580a912fecb48dd7452c0f87afaab0bdb", "https://i.scdn.co/image/f08cb562dec57708b1d8cd2c8878ff6554f73a07",
  "https://i.scdn.co/image/8cce11b5bcda32e61cd21ab3fd1c9adb153a17a6", "https://i.scdn.co/image/082f51186210f10a4224f5859b6d376fc340c9f2", "https://i.scdn.co/image/0a2cb26a7f8ee6fa46e702d04b3f8e202f942928", "https://i.scdn.co/image/438e3b57abfa398f55a267911e91b049aed0b6e2", "https://i.scdn.co/image/84b07f6d4f42ba75d2b3d147d08f9339eb52c355", "https://i.scdn.co/image/5e999cbf67008fbe36a895a347418af47f7b333f", "https://i.scdn.co/image/9003e385fa542f53d4a4bba5145ae2702df41619", "https://i.scdn.co/image/83604a9a400557b87c5c48ec8895ff063f1f2629",
  "https://i.scdn.co/image/d30c3c3da8b96f695418bb18987af80f72ed7f46", "https://i.scdn.co/image/c08743f8efb280f331e1f436d5044bbf7f3576ba", "https://i.scdn.co/image/e703a398922050fc4de41d58cd21dd191578432a", "https://i.scdn.co/image/d5fa2bef584f3d0b76907d5da4034f6e2c6b5d11", "https://i.scdn.co/image/38a9cb964a67a77800be742bcbd990d62635f838", "https://i.scdn.co/image/e4d94675aa83fb736c04b954bcabdf2685794e0c", "https://i.scdn.co/image/bf6e62526f2690d7beac7c8b61a13ccfddc111c0", "https://i.scdn.co/image/a068b70fc99b4327c90d045d200ec5ad3371d296",
  "https://i.scdn.co/image/9917e22dd30b72c08c7c1ca9ae5bb0b2fddeca00", "https://i.scdn.co/image/21e18590b66c800a41e9d4b381aecd03af2c0178", "https://i.scdn.co/image/d0f24555dc712511c02be864cda32e19cb507cd8", "https://i.scdn.co/image/f92b279a866fc117caee29a9cd759d9a133f60df", "https://i.scdn.co/image/1e3083d138d748247950d51560abd78e0de21be3", "https://i.scdn.co/image/515197b520d5c976cbf5b07fde3b1299d21fbc13", "https://i.scdn.co/image/6731ca0d385fd252e90b6d95b1e54a93b436a2f3", "https://i.scdn.co/image/49e9c87b9eca50dace14df580d4e0d7e41b529fb",
  "https://i.scdn.co/image/43c72019f87f646d2fa22e12b87c71a143e105c1", "https://i.scdn.co/image/004d435b7aee3783e612f1e9bcac57f4a45bb3b3", "https://i.scdn.co/image/06453063b2759335a01bca17061997ec4183cb61", "https://i.scdn.co/image/438e3b57abfa398f55a267911e91b049aed0b6e2", "https://i.scdn.co/image/4f01e7c0e639ffe4dec0eccfd147a504ae64f398", "https://i.scdn.co/image/b0c1ccdd0cd7bcda741ccc1c3e036f4ed2e52312", "https://i.scdn.co/image/9d7b48b25508b6ce7527fe3d6532c7ae50c3fc20", "https://i.scdn.co/image/9d7b48b25508b6ce7527fe3d6532c7ae50c3fc20",
  "https://i.scdn.co/image/5ac2e12ec7f1112d097748e0f7d61a6003856d9e", "https://i.scdn.co/image/d9ecf614871cf76f64b47c73b6cbe391aaa40ce3", "https://i.scdn.co/image/b85744da6cc0a097ceda62bd5fb8ed9424681121", "https://i.scdn.co/image/591aeb367e497e76f30e0feb932ae386b2237251", "https://i.scdn.co/image/8451424698a88ef2c7e2fd877e7a03d55267a083", "https://i.scdn.co/image/65bdb365c9247b8204fa02f51ebf5224d1e6397b", "https://i.scdn.co/image/c845540fd1ed45da7f8bb9159421c21dbc0d4028", "https://i.scdn.co/image/3f4192c414090b7f5aa403eb8e2ba673195419be",
  "https://i.scdn.co/image/9c09e7bdc0a4ea8ce14147d2cc3cef0b0a8c5812", "https://i.scdn.co/image/a25e9a17ac225f4d7eecc8864d6203dbf3038505", "https://i.scdn.co/image/0ecd9a0e2771d9e6ce334dad005f5db62ecaf630", "https://i.scdn.co/image/8781e46325e078fb82d3e9328351561980a78664", "https://i.scdn.co/image/6c19834e9b1b50013c5d8f985caf857ce893e7f1", "https://i.scdn.co/image/c9ef6cc5b4ca3e50ed23b1042cdf21266c96e52d", "https://i.scdn.co/image/778db356c6872ac742f90c1dfd354258042a5cd1", "https://i.scdn.co/image/4865dbd1463faa55b5ceb92d434d18c48f6533e0",
  "https://i.scdn.co/image/89a8fad72ecf2e4bb21107ee33a71344b6d79cbe", "https://i.scdn.co/image/e23c17f506613bae2cd9791d68d512537eeec4a4", "https://i.scdn.co/image/594604017cfe2a1e88cb5c46024c2c82c111c27c", "https://i.scdn.co/image/e689ebfcb1f8983e4b2a13a025dc9542145ad589", "https://i.scdn.co/image/90c3e7a2685a796ecb81c661f592f46ee5e9c4e5", "https://i.scdn.co/image/e23c17f506613bae2cd9791d68d512537eeec4a4", "https://i.scdn.co/image/fae1d2d16f5604e833e7b6c84fc7ab8bbb6d4f6d", "https://i.scdn.co/image/b4ea5c97627e509d91bf02831fe94fde2b432c14",
  "https://i.scdn.co/image/30aedc358779d0eff72362b60ef8a4266705ada1", "https://i.scdn.co/image/a1fe6524bf989f8ed488d73633d939f360a42d4a", "https://i.scdn.co/image/25d0a5c699133784a847f0fe94ff3594fae7414b", "https://i.scdn.co/image/9376780ff8d51a58bf03b63e6ce679e81937410b", "https://i.scdn.co/image/437144863e42e25b05113e97449c66a6e85ff755", "https://i.scdn.co/image/bdb8bd7bd2ab406ef31640356c4747c0f8160a94", "https://i.scdn.co/image/7d0b1e550da7bc85038dcea0a8d558daf84046e4", "https://i.scdn.co/image/b4d226ca3714bd31bd1271e09cd9694d2a6f6805",
  "https://i.scdn.co/image/33a7323527815b3123f4dc1212f71e338f8930c1", "https://i.scdn.co/image/346e72434b0fc79e4bb5185d92e11b96e1214a96", "https://i.scdn.co/image/aaebf184525d7f03f1de71840b7eb1644e861b8b", "https://i.scdn.co/image/f0ffeaa05aff767f2d48929af0c305eaa24e6941"]

artists = ["Béla Bartók", "Millennium", "Tim Legend", "Eric Church", "Ir Sais", "Teams", "BH", "QT", "Jason Derulo", "RD Project", "Tofiq (IE)", "Saidani Rabab", "K.L.", "Eduard GK", "Michael Jackson", "Arctic Monkeys", "Young Thug", "Wiz Khalifa", "Rich Homie Quan", "Hardy Sandhu",
  "Los Caminantes HN", "DJ Y.T", "Lt. Charles A. Zimmerman", "RD Project", "Autoramas", "Rea K", "Bo Burnham", "John Mayer", "Mindless Behavior", "Different Heaven", "Eek-A-Mouse", "Enrique Iglesias", "Feke Pál", "Anamanaguchi", "Norris Man", "Flo Rida", "PJ", "Mac Miller", "Hail The Sun", "ScHoolboy Q",
  "İrem Derici", "Into It. Over It.", "Millennium", "Minimal 69", "Drake", "CL", "Andrew kn", "HQ Rox", "C.B Murdoc", "RM Project", "J. Tillman", "Coccodrillo Band", "Above & Beyond", "Mogey", "E-40", "O.T. Genasis", "ZZ Top", "Marc E. Bassy", "Julión Álvarez y su Norteño Banda", "Flo Rida",
  "Carl Philipp Emanuel Bach", "Lindsey Stirling", "R.B. Greaves", "R.B. Greaves", "Keith Washington", "Africaine 808", "Perro Zw", "Baipa Alerwa", "Germs", "Carrie Underwood", "G-Val", "SG Lewis", "Edward Sharpe & The Magnetic Zeros", "QM", "TÂCHES", "Rod Glidewell", "Coolio", "Future", "AC/DC", "dj-Jo",
  "Indust.", "Yo Gotti", "TZ Project", "ef", "Adele", "Yo Gotti", "Pastor T.L. Barrett and the Youth for Christ Choir", "Sp-Dj", "Randy Rhodes", "Lil Uzi Vert", "Deca", "Young Scooter", "Dave East", "Trey Songz", "Jerry Purpdrank", "ScHoolboy Q", "Israel Kamakawiwo'ole", "Lana Del Rey", "50 Cent", "Rihanna"]l
  
titles.length.times do |i|
    Track.create!(title: titles[i], image_url: image_urls[i],
                    audio_url: audio_urls[i], artist: artists[i], like_count: rand(39) + 1)
end

User.create({email: 'demo@demo.com', password: 'password'})
