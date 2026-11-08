// ===== Data & storage =====
const CART_KEY="rewear_cart", USERS_KEY="rewear_users",
      LISTINGS_KEY="rewear_listings", FAV_KEY="rewear_favs";
const LANGUAGE_KEY="rewear_language";

const AR_TRANSLATIONS = {
  "Home":"الرئيسية", "Shop":"تسوّق", "Sell":"بيع", "Sustainability":"الاستدامة",
  "About":"من نحن", "Contact":"اتصل بنا", "Sign in":"تسجيل الدخول", "Sign up":"إنشاء حساب",
  "About ReWear":"عن ReWear",
  "Cart (":"السلة (", "Language":"اللغة", "The shop":"المتجر",
  "Main":"التنقل الرئيسي", "Why shoppers choose ReWear":"لماذا يختار المتسوقون ReWear", "Community impact":"أثر المجتمع",
  "A colourful rack of second-hand clothes at an outdoor market":"مجموعة ملونة من الملابس المستعملة في سوق مفتوح",
  "ReWear — Give fashion a second life":"ReWear — امنح الأزياء حياة ثانية",
  "Buy and sell pre-loved clothes with people who actually care. Every piece gets another chapter, and your wallet gets a break too.":"اشترِ وبع الملابس المستعملة مع أشخاص يهتمون فعلاً. امنح كل قطعة فصلاً جديداً ووفر من ميزانيتك أيضاً.",
  "Fashion, reimagined":"أزياء بفكرة جديدة", "That coat you forgot about? Someone's looking for it.":"ذلك المعطف الذي نسيته؟ هناك من يبحث عنه.",
  "Your closet is full of stories waiting for their next chapter. Buy pre-loved pieces that actually fit your life, sell the things you've outgrown, and keep good clothes out of the bin — one small decision at a time.":"خزانتك مليئة بقطع تنتظر بداية جديدة. اشترِ ملابس مستعملة تناسب حياتك، وبع ما لم تعد تحتاجه، وساهم في إبقاء الملابس الجيدة بعيداً عن النفايات.",
  "Find your next favorite":"اعثر على قطعتك المفضلة التالية", "Start selling today":"ابدأ البيع اليوم",
  "Free to join":"التسجيل مجاني", "No listing fees":"لا رسوم على عرض المنتجات", "Every item has a story":"لكل قطعة حكاية",
  "pieces given a second life":"قطعة بدأت حياة جديدة", "neighbours in our community":"شخص في مجتمعنا", "of water kept in circulation":"لتر ماء تم الحفاظ عليه",
  "How it works":"كيف يعمل", "Honestly? It's just passing something on.":"ببساطة، إنها مشاركة ما لم تعد تحتاجه.",
  "No spreadsheets. No confusing shipping labels. Three small steps — and a piece you loved gets another chapter with someone who'll love it too.":"لا جداول معقدة ولا ملصقات شحن مربكة. ثلاث خطوات بسيطة تمنح قطعتك المحبوبة فصلاً جديداً مع شخص سيحبها أيضاً.",
  "Snap & list":"صوّر واعرض", "Got something you're ready to let go? Take a few photos, tell its story, set your price. Listing takes less time than folding laundry.":"هل لديك قطعة لم تعد تحتاجها؟ التقط بعض الصور، واكتب قصتها، وحدد سعرها. عرض القطعة أسرع من طيّ الملابس.",
  "Discover":"اكتشف", "Search by size, style, or mood. Every listing comes from a real person — not a warehouse — so you know what you're getting.":"ابحث حسب المقاس أو الأسلوب. كل قطعة معروضة من شخص حقيقي، لا من مستودع، لتعرف ما الذي تشتريه.",
  "Wear it, then pass it on":"ارتدها ثم شاركها", "When you're done, list it again. The best clothes don't retire. They keep moving.":"عندما تنتهي منها، اعرضها من جديد. الملابس الجيدة لا تتوقف عن الحركة.",
  "Why ReWear":"لماذا ReWear", "Good for your closet. Better for the world.":"أفضل لخزانتك وللعالم.",
  "Kinder on your wallet":"ألطف على ميزانيتك", "Lighter on the planet":"أخف وطأة على كوكبنا", "Built on real people":"مجتمع من أشخاص حقيقيين",
  "Fresh arrivals":"وصل حديثاً", "Just landed in the shop.":"وصلت للتو إلى المتجر.", "See everything in the shop →":"شاهد كل المنتجات في المتجر ←",
  "The newest pieces from our community — picked for their story, not their price tag.":"أحدث القطع من مجتمعنا، اخترناها لحكاياتها لا لأسعارها.",
  "From the community":"من مجتمعنا", "People who gave a piece a second chance.":"أشخاص منحوا قطعة فرصة ثانية.",
  "“I listed three coats I hadn't worn in two years. Two sold in a week — and I used the money to buy a jacket I actually love.”":"«عرضت ثلاثة معاطف لم أرتدها منذ عامين. بيع اثنان خلال أسبوع، واستخدمت المبلغ لشراء سترة أحبها فعلاً.»",
  "“I stopped buying new jeans. Every pair I've found here has more personality than anything in a mall.”":"«توقفت عن شراء الجينز الجديد. لكل قطعة وجدتها هنا طابع يميزها عن ملابس المراكز التجارية.»",
  "“The descriptions are honest and sellers actually reply. Feels like borrowing from a friend's closet — but better.”":"«الأوصاف صادقة والبائعون يردون فعلاً. كأنك تستعير من خزانة صديق، لكن بصورة أفضل.»",
  "Seller since 2026":"بائعة منذ 2026", "Buyer since 2026":"مشترٍ منذ 2026", "Community member since 2026":"عضوة في المجتمع منذ 2026",
  "Stay in the loop.":"ابقَ على اطلاع.", "Join the list":"اشترك في القائمة", "Email address":"البريد الإلكتروني",
  "Give fashion a second life.":"امنح الأزياء حياة ثانية.", "Student project — no real payments or accounts.":"مشروع طلابي، لا توجد مدفوعات أو حسابات حقيقية.",
  "Pieces looking for their next chapter.":"قطع تبحث عن فصلها التالي.",
  "Hand-picked, honestly described, and priced like a real thrift shop — most everyday pieces sit between EGP 200 and 400, because that's where our community actually buys.":"قطع مختارة بعناية، موصوفة بصدق، وبأسعار متجر مستعمل حقيقي. يتراوح سعر معظم القطع اليومية بين 200 و400 جنيه مصري.",
  "Search by name or brand":"ابحث بالاسم أو العلامة التجارية", "Search":"بحث", "Category":"الفئة", "All categories":"كل الفئات",
  "All sizes":"كل المقاسات", "Size (e.g. M, 42)":"المقاس (مثال: M، 42)", "Min price (EGP)":"أقل سعر (جنيه مصري)", "Max price (EGP)":"أعلى سعر (جنيه مصري)", "Minimum price in EGP":"أقل سعر بالجنيه المصري", "Maximum price in EGP":"أعلى سعر بالجنيه المصري", "Clear filters":"مسح عوامل التصفية",
  "Shirts":"قمصان", "Jeans":"جينز", "Jackets":"سترات", "Dresses":"فساتين", "Shoes":"أحذية", "Accessories":"إكسسوارات", "One size":"مقاس واحد",
  "Sort":"ترتيب", "Sort: newest":"الترتيب: الأحدث", "Price: low to high":"السعر: من الأقل إلى الأعلى", "Price: high to low":"السعر: من الأعلى إلى الأقل",
  "Your closet has value. Let's unlock it.":"خزانتك لها قيمة. لِنكتشفها معاً.",
  "Someone out there is looking for exactly what you've stopped wearing. A few honest details and one clear photo — that's all it takes to give a piece its next home. And honestly? It feels good to pass something on.":"هناك من يبحث عما لم تعد ترتديه. أضف بعض التفاصيل الصادقة وصورة واضحة لتجد القطعة بيتها الجديد. مشاركة ما نحب شعور جميل.",
  "The listing":"عرض القطعة", "Tell us about your piece.":"أخبرنا عن قطعتك.", "Be honest about condition — buyers respond to it, and it makes the whole community stronger.":"كن صريحاً بشأن حالة القطعة؛ فهذا يساعد المشترين ويقوي مجتمعنا.",
  "Item name":"اسم القطعة", "Choose a category":"اختر فئة", "Price ($)":"السعر", "Price (EGP)":"السعر (جنيه مصري)", "Condition":"الحالة", "Choose condition":"اختر الحالة",
  "Photo (optional)":"صورة (اختياري)", "Image files only; photos are resized before saving in this browser.":"صور بصيغ JPG أو PNG أو WebP فقط. سيتم تصغيرها قبل حفظها في هذا المتصفح.",
  "Choose a JPG, PNG, or WebP image.":"اختر صورة بصيغة JPG أو PNG أو WebP.",
  "Choose an image smaller than 8 MB.":"اختر صورة أصغر من 8 ميغابايت.", "The image could not be processed. Try another image.":"تعذر تجهيز الصورة. جرّب صورة أخرى.", "Your listing could not be saved in this browser. Free up storage and try again.":"تعذر حفظ إعلانك في هذا المتصفح. أفرغ مساحة ثم حاول مجدداً.",
  "Like New":"كالجديدة", "Good":"جيدة", "Fair":"مقبولة", "Size":"المقاس", "Brand (optional)":"العلامة التجارية (اختياري)",
  "Your name":"اسمك", "Description (optional)":"الوصف (اختياري)", "List my piece":"اعرض قطعتي", "Back to shop":"العودة إلى المتجر",
  "Tips from the community":"نصائح من المجتمع", "What makes a listing feel worth buying?":"ما الذي يجعل القطعة المعروضة جديرة بالشراء؟",
  "Photograph it in daylight":"صوّرها في ضوء النهار", "Say what you'd want to know":"اكتب ما تريد أن تعرفه", "Price for a second home":"ضع سعراً مناسباً لبيت جديد",
  "Good clothes deserve more than one story.":"الملابس الجيدة تستحق أكثر من حكاية.", "Buy thoughtfully":"اشترِ بوعي", "Sell simply":"بع بسهولة", "Built as a demo":"نسخة تجريبية",
  "What we believe":"ما نؤمن به", "Four small ideas we keep coming back to.":"أربع أفكار بسيطة نعود إليها دائماً.", "Clothes carry stories":"الملابس تحمل الحكايات",
  "Small acts, repeated":"خطوات صغيرة تتكرر", "Honesty is the product":"الصدق أساس التجربة", "Explore the shop":"تصفح المتجر", "How selling works":"كيف يعمل البيع",
  "Real humans. Real replies.":"أشخاص حقيقيون. وردود حقيقية.", "Send us a message":"أرسل لنا رسالة", "WhatsApp number":"رقم واتساب",
  "Questions? Start here.":"لديك سؤال؟ ابدأ من هنا.",
  "Social or Messenger (optional)":"حساب اجتماعي أو ماسنجر (اختياري)", "How can we help?":"كيف يمكننا مساعدتك؟", "Send message":"أرسل الرسالة",
  "Quick answers":"إجابات سريعة", "Before you write.":"قبل أن تراسلنا.", "Is ReWear a real marketplace?":"هل ReWear متجر حقيقي؟",
  "How do payments work?":"كيف تتم المدفوعات؟", "Can I return something?":"هل يمكنني إرجاع قطعة؟", "Something's broken — where do I report it?":"هناك مشكلة، أين أبلغ عنها؟",
  "Welcome back":"مرحباً بعودتك", "Access your ReWear account to pick up where you left off.":"سجّل الدخول إلى حسابك لمتابعة ما بدأته.",
  "Email":"البريد الإلكتروني", "Password":"كلمة المرور", "Your password":"كلمة المرور", "New to ReWear?":"جديد على ReWear؟", "Create an account":"أنشئ حساباً",
  "Join the community":"انضم إلى المجتمع", "Give your closet a second act.":"امنح خزانتك بداية جديدة.", "Full name":"الاسم الكامل", "Confirm password":"تأكيد كلمة المرور",
  "Create my account":"أنشئ حسابي", "Already have one?":"لديك حساب بالفعل؟", "Create account":"إنشاء حساب",
  "Your cart":"سلة التسوق", "This is a demo checkout. No payment details are collected and no real payment is made.":"هذه صفحة دفع تجريبية. لا نجمع بيانات الدفع ولا تتم أي عملية دفع حقيقية.",
  "Total:":"الإجمالي:", "Place demo order":"إتمام الطلب التجريبي", "Remove":"إزالة", "Your cart is empty.":"سلة التسوق فارغة.",
  "Find something you'll love →":"اعثر على ما ستحبه ←", "Add to cart":"أضف إلى السلة", "Save this piece":"احفظ هذه القطعة", "Remove from saved":"أزلها من المحفوظات",
  "Nothing here yet — try a different filter, or check back soon.":"لا توجد نتائج حالياً. جرّب خيارات بحث أخرى أو عُد لاحقاً.", "Be the first to list something new →":"كن أول من يعرض قطعة جديدة ←",
  "Wear it longer":"ارتدها مدة أطول", "The most sustainable wardrobe is the one you already own.":"الخزانة الأكثر استدامة هي تلك التي تملكها بالفعل.",
  "Every pre-loved piece is one less new item made. Not a silver bullet — but a small, repeated choice that adds up faster than you'd think. Here's what it actually looks like, with real numbers instead of vague promises.":"كل قطعة مستعملة تعني قطعة جديدة أقل. ليس حلاً سحرياً، بل خياراً بسيطاً يتكرر ويصنع فرقاً. إليك أثره بالأرقام الفعلية.",
  "Move the slider to estimate what happens when you choose pre-loved over new this year.":"حرّك المؤشر لتقدير أثر اختيار الملابس المستعملة بدلاً من الجديدة هذا العام.",
  "Hand-picked, honestly described, and priced like a real thrift shop — most everyday pieces sit between":"قطع مختارة بعناية وموصوفة بصدق وبأسعار متجر مستعمل حقيقي. يتراوح سعر معظم القطع اليومية بين",
  "EGP 200 and 400":"200 و400 جنيه مصري",
  ", because that's where our community actually buys.":"، فهذا هو النطاق السعري الذي يفضله مجتمعنا.",
    "Student project.":"مشروع طلابي.",
    "© 2026 ReWear. Student project.":"© 2026 ReWear. مشروع طلابي.",
    "© 2026 ReWear. Student project — no real payments or accounts.":"© 2026 ReWear. مشروع طلابي، لا توجد مدفوعات أو حسابات حقيقية.",
    "e.g. Levi's 501 Straight Jeans":"مثال: Levi's 501 Straight Jeans", "M / 42 / One size":"M / 42 / مقاس واحد",
    "e.g. Zara":"مثال: Zara", "So buyers know who they're talking to":"ليعرف المشترون مع من يتواصلون",
    "Fit, fabric, any wear, and why you loved it.":"المقاس والقماش وأي آثار استخدام وسبب حبك لهذه القطعة.",
    "App name and username":"اسم التطبيق واسم المستخدم", "Tell us what's on your mind — the more detail, the better.":"أخبرنا بما تفكر فيه، فكلما زادت التفاصيل كان ذلك أفضل.",
    "8+ characters, at least one number":"8 أحرف على الأقل ورقم واحد على الأقل",
    "That email doesn't look right — mind checking it?":"يبدو أن البريد الإلكتروني غير صحيح. هل يمكنك التحقق منه؟",
    "Please enter your name.":"يرجى إدخال اسمك.",
    "Demo only. Account details are stored in this browser. Do not use a real password.":"نسخة تجريبية فقط. تُحفظ بيانات الحساب في هذا المتصفح. لا تستخدم كلمة مرور حقيقية.",
    "Passwords need at least 8 characters and one number.":"يجب أن تتكون كلمة المرور من 8 أحرف على الأقل ورقم واحد.",
    "The two passwords don't match.":"كلمتا المرور غير متطابقتين.",
    "That email's already registered. Try signing in instead.":"هذا البريد مسجل بالفعل. جرّب تسجيل الدخول.",
    "We couldn't match that email and password. Try again?":"لم نتمكن من مطابقة البريد الإلكتروني وكلمة المرور. حاول مرة أخرى.",
    "Listed! Your piece is now live in the shop — refresh to see it.":"تم عرض القطعة في المتجر. حدّث الصفحة لرؤيتها.",
    "Demo order placed — nothing was charged. Thanks for trying ReWear!":"تم تسجيل الطلب التجريبي، ولم يتم تحصيل أي مبلغ. شكراً لتجربة ReWear!",
    "Thanks — this demo has no inbox yet, so your message wasn't sent. In a live version, we'd reply within 1–2 days.":"شكراً لك. لا يستقبل هذا النموذج الرسائل حالياً، لذلك لم تُرسل رسالتك. في النسخة الفعلية سنرد خلال يوم أو يومين.",
  "ReWear started with a question that wouldn't leave us alone: why do we treat beautiful, wearable clothing as if it's disposable? We didn't have a grand answer — just a small idea that felt worth trying. Make it easier for people to pass on the clothes they've loved, and to find the ones that will love them next.":"بدأت ReWear بسؤال لم يفارقنا: لماذا نتعامل مع الملابس الجميلة القابلة للارتداء وكأنها للاستعمال مرة واحدة؟ لم نملك إجابة كبيرة، بل فكرة بسيطة تستحق التجربة: تسهيل مشاركة الملابس التي أحببناها والعثور على قطع جديدة.",
  "ReWear started with a question that wouldn't leave us alone:":"بدأت ReWear بسؤال لم يفارقنا:",
  "why do we treat beautiful, wearable clothing as if it's disposable?":"لماذا نتعامل مع الملابس الجميلة القابلة للارتداء وكأنها للاستعمال مرة واحدة؟",
  "We didn't have a grand answer — just a small idea that felt worth trying. Make it easier for people to pass on the clothes they've loved, and to find the ones that will love them next.":"لم نملك إجابة كبيرة، بل فكرة بسيطة تستحق التجربة: تسهيل مشاركة الملابس التي أحببناها والعثور على قطع جديدة.",
  "Browse by category, size, or price. Save what you love. Buy only what you'll actually wear — that's the whole point.":"تصفح حسب الفئة أو المقاس أو السعر. احفظ ما يعجبك واشترِ فقط ما سترتديه فعلاً، فهذه هي الفكرة.",
  "An honest description and a couple of clear photos is all it takes. No spreadsheets. No shipping labels. No fees.":"كل ما تحتاجه وصف صادق وصورتان واضحتان. لا جداول ولا ملصقات شحن ولا رسوم.",
  "This is a student project — orders, accounts, and payments are simulated. But the mission behind it isn't hypothetical: good clothes really do deserve a second chance.":"هذا مشروع طلابي؛ الطلبات والحسابات والمدفوعات تجريبية. لكن فكرته حقيقية: الملابس الجيدة تستحق فرصة ثانية.",
  "A clear photo in natural light helps show the real colour and texture.":"تساعد الصورة الواضحة في ضوء النهار على إظهار اللون والملمس الحقيقيين.",
  "Fit, fabric, any small flaws. Honest descriptions build trust and sell faster.":"اكتب عن المقاس والقماش وأي عيوب بسيطة. الأوصاف الصادقة تبني الثقة وتسرّع البيع.",
  "Fair prices sell. Ask yourself: what would make a stranger excited to press \"buy\"?":"الأسعار العادلة تساعد على البيع. اسأل نفسك: ما السعر الذي يشجع شخصاً غريباً على الشراء؟",
  "List a piece you no longer wear. Honest details, real buyers, no listing fees.":"اعرض قطعة لم تعد ترتديها. تفاصيل صادقة ومشترون حقيقيون ومن دون رسوم عرض.",
  "Get in touch with ReWear. Real humans, real replies.":"تواصل مع ReWear. أشخاص حقيقيون وردود حقيقية.",
  "Browse pre-loved clothes and accessories. Filter by category, size, and price.":"تصفح الملابس والإكسسوارات المستعملة وصنّفها حسب الفئة والمقاس والسعر.",
  "What choosing pre-loved really saves — and why the numbers matter more than the slogans.":"ما الذي توفره الملابس المستعملة فعلاً، ولماذا تهمنا الأرقام أكثر من الشعارات.",
  "This is a demo checkout. No payment details are collected and no real payment is made.":"هذه صفحة دفع تجريبية. لا نجمع بيانات الدفع ولا تتم أي عملية دفع حقيقية.",
  "Rough estimates based on industry averages. A single cotton T-shirt takes about 2,700 litres of water to produce, and a pair of jeans around 11,000 litres — so every pre-loved piece you choose avoids that cost.":"تقديرات تقريبية مبنية على متوسطات القطاع. يتطلب إنتاج قميص قطني نحو 2,700 لتر من الماء، وسروال جينز نحو 11,000 لتر؛ لذا فإن اختيار قطعة مستعملة يوفر هذه الموارد.",
  "Clear details about condition and wear help buyers choose pieces they'll actually keep wearing — not return or throw away. Honesty sells better than hype.":"تساعد التفاصيل الواضحة عن حالة القطعة المشتري على اختيار ما سيرتديه فعلاً بدلاً من إرجاعه أو التخلص منه. الصدق أفضل من المبالغة.",
  "Second-hand works best when an item fills a real gap and gets worn often. A “deal” you never touch isn't a deal — it's just clutter with a discount.":"تكون الملابس المستعملة خياراً أفضل عندما تلبي حاجة حقيقية وتُرتدى كثيراً. القطعة المخفضة التي لا ترتديها ليست صفقة، بل فوضى بسعر أقل.",
  "When you're done with a piece, list it or donate it. Keeping it in circulation is what gives it another life — and keeps it out of landfill.":"عندما تنتهي من قطعة، اعرضها للبيع أو تبرع بها. استمرار تداولها يمنحها حياة أخرى ويبعدها عن مكب النفايات.",
  "A jacket holds the night you wore it. The right owner should be able to add to that story — not start over.":"تحمل السترة ذكرى الليلة التي ارتديتها فيها. يستطيع مالكها التالي إضافة حكاية جديدة بدلاً من البدء من الصفر.",
  "No single purchase saves the planet. A million small choices, made by ordinary people, actually might.":"لن تنقذ عملية شراء واحدة الكوكب، لكن مليون خيار صغير من أشخاص عاديين قد يفعل ذلك.",
  "Real people, real descriptions, real prices. The moment any of that becomes fake, we've lost the point.":"أشخاص حقيقيون وأوصاف وأسعار صادقة. إذا فقدنا ذلك، فقدنا جوهر الفكرة.",
  "Style, not waste":"أناقة بلا هدر", "Vintage isn't a compromise. It's a flex.":"الأزياء القديمة ليست تنازلاً، بل تميّز.",
  "Watch & learn":"شاهد وتعلّم", "See how it's done — from someone who actually does it.":"شاهد كيف يتم ذلك على يد شخص يمارسه فعلاً.",
  "Bassant Maximus turns thrift-shop finds into pieces people stop her in the street to ask about. This is what real upcycling looks like in Egypt.":"تحوّل بسنت ماكسيموس اكتشافاتها من متاجر الملابس المستعملة إلى قطع يسألها الناس عنها في الشارع. هكذا تبدو إعادة التدوير الإبداعية في مصر.",
  "Your browser does not support the video tag.":"متصفحك لا يدعم تشغيل الفيديو.",
  "Attempt to salvage (recycle) a Rethrift 100% silk top By Bassant Maximus بالتفصيل→":"محاولة إنقاذ وإعادة تدوير بلوزة حرير 100% من Rethrift، بواسطة بسنت ماكسيموس بالتفصيل ←",
  "The feeling":"لحظة العثور عليها", "That moment you find it.":"تلك اللحظة التي تعثر فيها عليها.",
  "The rack, the search, the piece that feels like it was waiting for you.":"بين القطع والبحث، تعثر على قطعة تشعر وكأنها كانت بانتظارك.",
  "Royalty-free footage from Pexels.":"مقطع مرخّص مجاناً من Pexels.", "Royalty-free thrift-shopping footage.":"مقطع مرخّص مجاناً للتسوق من الملابس المستعملة.",
  "Royalty-free footage of thrift shopping":"مقطع مرخّص مجاناً للتسوق من الملابس المستعملة",
  "View the original clip →":"شاهد المقطع الأصلي ←", "Open the original clip →":"افتح المقطع الأصلي ←",
  "Find Bassant's channel on YouTube →":"اعثر على قناة بسنت على YouTube ←", "Visit Gannah Anwar on TikTok →":"زُر حساب جنا أنور على TikTok ←",
  "In practice":"عملياً", "Three small habits that actually move the needle.":"ثلاث عادات بسيطة تصنع فرقاً.",
  "Gannah Anwar mixes vintage finds with pieces she already owns — proof that second-hand can look more put-together than anything off a fast-fashion shelf.":"تمزج جنا أنور قطعاً قديمة بما تملكه بالفعل، لتثبت أن الملابس المستعملة قد تبدو أكثر أناقة من أزياء الموضة السريعة.",
  "Gannah Anwar — Egyptian vintage and thrift style creator":"جنا أنور، صانعة محتوى مصرية للأزياء القديمة والمستعملة",
  "TikTok GRWM content from an Egyptian creator who built her style on vintage finds.":"محتوى تنسيق أزياء من صانعة محتوى مصرية بنت أسلوبها باكتشافات الأزياء القديمة.",
  "Watch on TikTok →":"شاهد على TikTok ←", "For the builders":"لأصحاب المشاريع",
  "Thinking of turning your closet into a small business?":"هل تفكر في تحويل شغفك بالملابس إلى مشروع صغير؟",
  "Rami Helaly started Kotn between Egypt and Canada. He talks about the first mistake, the moment he left his job, and why Egyptian cotton mattered more than fast growth.":"أسس رامي هلالي علامة Kotn بين مصر وكندا. يتحدث عن أول خطأ ارتكبه وتركه لوظيفته وأهمية القطن المصري مقارنة بالنمو السريع.",
  "El Mal El Halal · Arabic":"المال الحلال · عربي", "Rami Helaly — Building Kotn from Zero":"رامي هلالي: تأسيس Kotn من الصفر",
  "An honest conversation about starting a fashion brand in Egypt, the mistakes, and what actually matters.":"حديث صريح عن تأسيس علامة أزياء في مصر، والأخطاء، وما يهم فعلاً.",
  "Watch on YouTube":"شاهد على YouTube", "One piece, second life":"قطعة واحدة، حياة ثانية",
  "This is what “pass it on” actually looks like.":"هكذا تبدو مشاركة القطع فعلياً.",
  "Khadija took her grandmother's old galabeya and turned it into something she could wear out. That's the whole idea behind ReWear — clothes don't expire. They just need a new chapter.":"حوّلت خديجة جلابية جدتها القديمة إلى قطعة ترتديها خارج المنزل. هذه هي فكرة ReWear: الملابس لا تنتهي صلاحيتها، بل تحتاج إلى فصل جديد.",
  "Khadija Ibrahim — upcycling her grandmother's galabeya":"خديجة إبراهيم تعيد تصميم جلابية جدتها",
  "“دى جلبية تيتة” — Khadija's viral upcycling video.":"«دي جلبية تيتة» — فيديو خديجة واسع الانتشار عن إعادة التصميم.",
  "Find more on TikTok →":"شاهد المزيد على TikTok ←", "Listen while you browse":"استمع أثناء التصفح",
  "The real story behind Egypt's sustainable fashion scene.":"القصة الحقيقية وراء مشهد الأزياء المستدامة في مصر.",
  "Yara Yassin co-founded Upfuse from a graduation project. She talks about turning plastic waste into bags, building a brand nobody believed in, and why it mattered anyway.":"شاركت يارا ياسين في تأسيس Upfuse انطلاقاً من مشروع تخرج. تتحدث عن تحويل النفايات البلاستيكية إلى حقائب وبناء علامة لم يؤمن بها أحد، ولماذا كان ذلك مهماً.",
  "Yara Yassin co-founded Upfuse from a graduation project. She talks about sourcing plastic from Cairo's streets, building a brand nobody believed in, and why she almost quit — then didn't.":"شاركت يارا ياسين في تأسيس Upfuse انطلاقاً من مشروع تخرج. تتحدث عن جمع البلاستيك من شوارع القاهرة وبناء علامة لم يؤمن بها أحد، ولماذا كادت تستسلم ثم واصلت.",
  "Apple Podcasts · Arabic":"Apple Podcasts · عربي", "Yara Yassin, co-founder of Upfuse, on turning plastic waste into fashion — and building a purpose-driven brand in Egypt.":"يارا ياسين، الشريكة المؤسسة لـ Upfuse، تتحدث عن تحويل النفايات البلاستيكية إلى أزياء وبناء علامة مصرية هادفة.",
  "Listen on Apple Podcasts":"استمع على Apple Podcasts", "Egyptian Streets Podcast · 13 min":"بودكاست Egyptian Streets · 13 دقيقة",
  "Listen to the episode on Apple Podcasts":"استمع إلى الحلقة على Apple Podcasts",
  "Yara Yassin — Cofounding Upfuse":"يارا ياسين: تأسيس Upfuse",
  "A shorter cut: how a Cairo social enterprise turned recycled plastic into bags people actually want to carry.":"نسخة أقصر عن تحويل مؤسسة اجتماعية في القاهرة البلاستيك المعاد تدويره إلى حقائب يرغب الناس في استخدامها.",
  "Listen on Egyptian Streets":"استمع على Egyptian Streets",
  "Your impact":"أثرك", "See what your closet can do.":"اكتشف أثر خزانتك.", "Water saved":"مياه تم توفيرها", "CO₂ avoided":"انبعاثات CO₂ تم تجنبها", "Showers' worth of water":"ما يعادل استهلاك الدُش من الماء",
  "In practice":"عملياً", "Three small habits that actually move the needle.":"ثلاث عادات بسيطة تصنع فرقاً.", "1. Describe it honestly":"1. صِف القطعة بصدق", "2. Buy what you'll really wear":"2. اشترِ ما سترتديه فعلاً", "3. Pass it on":"3. شاركها مع غيرك",
  "Find a pre-loved piece":"اعثر على قطعة مستعملة", "List an item":"اعرض قطعة", "Source: Oxfam / CSRone":"المصدر: Oxfam / CSRone",
  "Quality pieces at prices that don't make you wince. Your budget will thank you — and so will your wardrobe.":"قطع جيدة بأسعار مناسبة لميزانيتك وخزانتك.",
  "Every pre-loved purchase skips new production — and the water and energy that come with it. Small choice. Real difference.":"كل عملية شراء لقطعة مستعملة تقلل الحاجة إلى إنتاج جديد وما يستهلكه من ماء وطاقة. خيار بسيط يصنع فرقاً.",
  "Buy from neighbours, not warehouses. Honest descriptions. Real sellers. Actual replies when you have a question.":"اشترِ من أشخاص قريبين لا من مستودعات. أوصاف صادقة وبائعون حقيقيون يجيبون عن أسئلتك.",
  "I listed three coats I hadn't worn in two years. Two sold in a week — and I used the money to buy a jacket I actually love.":"عرضت ثلاثة معاطف لم أرتدها منذ عامين. بيع اثنان خلال أسبوع، واستخدمت المبلغ لشراء سترة أحبها فعلاً.",
  "I stopped buying new jeans. Every pair I've found here has more personality than anything in a mall.":"توقفت عن شراء الجينز الجديد. لكل قطعة وجدتها هنا طابع يميزها عن ملابس المراكز التجارية.",
  "The descriptions are honest and sellers actually reply. Feels like borrowing from a friend's closet — but better.":"الأوصاف صادقة والبائعون يردون فعلاً. كأنك تستعير من خزانة صديق، لكن بصورة أفضل.",
  "New arrivals, impact stories, and the occasional style tip. No spam. Just the good stuff, once in a while.":"منتجات جديدة وقصص عن أثرنا ونصائح للأناقة من حين لآخر. لا رسائل مزعجة، فقط ما يفيدك.",
  "On Libsy, Egypt's main pre-loved marketplace, the median asking price is EGP 500. Most everyday pieces sell between EGP 200 and 400, and under-EGP-200 items have the highest sell-through rate at 36%. Price near the median and your piece reaches the most buyers from day one.":"في منصة Libsy، أكبر سوق مصري للملابس المستعملة، يبلغ متوسط السعر المطلوب 500 جنيه. تباع معظم القطع اليومية بين 200 و400 جنيه، وتحقق القطع الأقل من 200 جنيه أعلى نسبة مبيعات. السعر المناسب يساعد قطعتك على الوصول إلى مشترين أكثر.",
  "On Libsy, Egypt's main pre-loved marketplace, the median asking price is":"في منصة Libsy، أكبر سوق مصري للملابس المستعملة، يبلغ متوسط السعر المطلوب",
  "EGP 500":"500 جنيه",
  ". Most everyday pieces sell between": ". تباع معظم القطع اليومية بين",
  ", and under-EGP-200 items have the highest sell-through rate at 36%. Price near the median and your piece reaches the most buyers from day one.":"، وتحقق القطع الأقل من 200 جنيه أعلى نسبة مبيعات. السعر المناسب يساعد قطعتك على الوصول إلى أكبر عدد من المشترين منذ اليوم الأول.",
  "What's a fair price for second-hand clothes in Egypt?":"ما السعر المناسب للملابس المستعملة في مصر؟",
  "See the full pricing data":"اطّلع على بيانات الأسعار كاملة",
  "Give your closet a second act.":"امنح خزانتك بداية جديدة.", "8,600+ people are already buying and selling pre-loved pieces here. It takes a minute to join.":"أكثر من 8,600 شخص يشترون ويبيعون هنا. يستغرق الانضمام دقيقة واحدة.",
  "Access your ReWear account to pick up where you left off.":"سجّل الدخول إلى حسابك على ReWear لمتابعة ما بدأته.",
  "Questions about a listing, a bug, or an idea? Use this demo form to preview the support flow. Messages are not delivered to an inbox.":"هل لديك سؤال عن منتج أو مشكلة أو فكرة؟ استخدم هذا النموذج التجريبي لمعاينة طريقة الدعم. لا تُرسل الرسائل إلى أي بريد وارد.",
  "ReWear is a student demo — this form isn't connected to a live inbox yet. But the questions it asks are the ones a real support team would need.":"ReWear مشروع طلابي تجريبي، وهذا النموذج غير متصل ببريد فعلي. لكن هذه هي الأسئلة التي يحتاجها فريق الدعم.",
  "Not yet — this is a student project exploring what a warmer, more sustainable second-hand shop could look like. Orders and accounts are simulated.":"ليس بعد. هذا مشروع طلابي يستكشف شكل متجر مستعمل أكثر استدامة ووداً. الطلبات والحسابات تجريبية.",
  "They don't. There's no real checkout, no card details, and no money moves. Everything you see is a demo.":"لا توجد مدفوعات فعلية أو بيانات بطاقات، ولا يتم تحويل أي أموال. كل ما تراه تجريبي.",
  "Since no real orders are placed, there's nothing to return. In a live version, we'd offer a simple return window and clear condition guarantees.":"لا توجد طلبات حقيقية لإرجاعها. في النسخة الفعلية سنوفر فترة إرجاع واضحة وضماناً لحالة المنتج.",
  "Use the form on this page. Describe what happened and which page you were on. Screenshots help too.":"استخدم النموذج في هذه الصفحة واشرح ما حدث والصفحة التي كنت تزورها. تساعدنا لقطات الشاشة أيضاً.",
  "Items you'll give a second life this year:":"عدد القطع التي ستمنحها حياة ثانية هذا العام:",
  "Rough estimates based on industry averages. A single cotton T-shirt takes about 2,700 litres of water to produce, and a pair of jeans around 11,000 litres — so every pre-loved piece you choose avoids that cost.":"تقديرات تقريبية مبنية على متوسطات القطاع. يتطلب إنتاج قميص قطني نحو 2,700 لتر من الماء، وسروال جينز نحو 11,000 لتر؛ لذا فإن اختيار قطعة مستعملة يوفر هذه الموارد.",
  "Clear details about condition and wear help buyers choose pieces they'll actually keep wearing — not return or throw away. Honesty sells better than hype.":"تساعد التفاصيل الواضحة عن حالة القطعة المشتري على اختيار ما سيرتديه فعلاً بدلاً من إرجاعه أو التخلص منه. الصدق أفضل من المبالغة.",
  "Second-hand works best when an item fills a real gap and gets worn often. A “deal” you never touch isn't a deal — it's just clutter with a discount.":"تكون الملابس المستعملة خياراً أفضل عندما تلبي حاجة حقيقية وتُرتدى كثيراً. القطعة المخفضة التي لا ترتديها ليست صفقة، بل فوضى بسعر أقل.",
  "When you're done with a piece, list it or donate it. Keeping it in circulation is what gives it another life — and keeps it out of landfill.":"عندما تنتهي من قطعة، اعرضها للبيع أو تبرع بها. استمرار تداولها يمنحها حياة أخرى ويبعدها عن مكب النفايات.",
  "A jacket holds the night you wore it. The right owner should be able to add to that story — not start over.":"تحمل السترة ذكرى الليلة التي ارتديتها فيها. يستطيع مالكها التالي إضافة حكاية جديدة بدلاً من البدء من الصفر.",
  "No single purchase saves the planet. A million small choices, made by ordinary people, actually might.":"لن تنقذ عملية شراء واحدة الكوكب، لكن مليون خيار صغير من أشخاص عاديين قد يفعل ذلك.",
  "Real people, real descriptions, real prices. The moment any of that becomes fake, we've lost the point.":"أشخاص حقيقيون وأوصاف وأسعار صادقة. إذا فقدنا ذلك، فقدنا جوهر الفكرة.",
  "Shop — ReWear":"تسوّق — ReWear", "Sell a piece — ReWear":"بع قطعة — ReWear", "About — ReWear":"من نحن — ReWear", "Contact — ReWear":"اتصل بنا — ReWear",
  "Sign in - ReWear":"تسجيل الدخول - ReWear", "Sign up - ReWear":"إنشاء حساب - ReWear", "Cart - ReWear":"السلة - ReWear", "Sustainability — ReWear":"الاستدامة — ReWear"
};

const AR_TO_EN = Object.entries(AR_TRANSLATIONS).reduce((translations, [english, arabic]) => {
  if (!translations[arabic]) translations[arabic] = english;
  return translations;
}, {});
let currentLanguage = "en";

function translateText(value, language = currentLanguage) {
  const trimmed = value.trim();
  if (!trimmed) return value;
  const translated = language === "ar" ? AR_TRANSLATIONS[trimmed] : AR_TO_EN[trimmed];
  return translated ? value.replace(trimmed, translated) : value;
}

function applyLanguage(language) {
  currentLanguage = language === "ar" ? "ar" : "en";
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("select option").forEach(option => {
    if (!option.dataset.languageValue) option.dataset.languageValue = option.value;
    option.value = option.dataset.languageValue;
  });

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    const translated = translateText(node.nodeValue);
    if (translated !== node.nodeValue) node.nodeValue = translated;
  }

  document.querySelectorAll("[placeholder], [aria-label], [alt], [title]").forEach(element => {
    ["placeholder", "aria-label", "alt", "title"].forEach(attribute => {
      if (element.hasAttribute(attribute)) {
        element.setAttribute(attribute, translateText(element.getAttribute(attribute)));
      }
    });
  });
  document.title = translateText(document.title);
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = translateText(description.content);
}

function refreshLocalizedContent() {
  if (document.querySelector("#featured")) render(PRODUCTS.slice(0, 4), "#featured");
  if (document.querySelector("#products")) applyFilters();
  if (document.querySelector("#cart-items") && allProducts.length) renderCart();
}

function initLanguageSelector() {
  const nav = document.querySelector("header nav");
  if (!nav) return;

  const label = document.createElement("label");
  label.className = "language-switch";
  label.innerHTML = '<span class="visually-hidden">Language</span><select aria-label="Language"><option value="en">English</option><option value="ar">العربية</option></select>';
  const select = label.querySelector("select");
  select.value = localStorage.getItem(LANGUAGE_KEY) === "ar" ? "ar" : "en";
  select.addEventListener("change", () => {
    localStorage.setItem(LANGUAGE_KEY, select.value);
    applyLanguage(select.value);
    refreshLocalizedContent();
  });
  nav.append(label);
  applyLanguage(select.value);

  const observer = new MutationObserver(() => applyLanguage(currentLanguage));
  observer.observe(document.body, { childList: true, subtree: true });
}

let allProducts = [];

const read=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}};
const write=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
// =====  clothing photos =====
const PRODUCT_IMAGES = {
  1: "https://images.pexels.com/photos/1082527/pexels-photo-1082527.jpeg?auto=compress&cs=tinysrgb&w=600",          // straight-leg blue jeans
  2: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80",                                      // oversized linen shirt
  3: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80",                                      // wool-blend coat
  4: "https://images.pexels.com/photos/1148960/pexels-photo-1148960.jpeg?auto=compress&cs=tinysrgb&w=600",           // dress on a rack
  5: "https://images.pexels.com/photos/6050909/pexels-photo-6050909.jpeg?auto=compress&cs=tinysrgb&w=600",           // white sneakers
  6: "https://images.pexels.com/photos/2081332/pexels-photo-2081332.jpeg?auto=compress&cs=tinysrgb&w=600",           // canvas tote
  7: "https://images.pexels.com/photos/18020903/pexels-photo-18020903.jpeg?auto=compress&cs=tinysrgb&w=600",         // denim jacket
  8: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80"                                       // striped cotton tee
};

const FALLBACK_IMG = "https://images.pexels.com/photos/31858694/pexels-photo-31858694.jpeg?auto=compress&cs=tinysrgb&w=600";

// ===== Products — priced against real Egyptian thrift data (Libsy, Aug 2026) =====
// Everyday pieces sit just under the EGP 500 median; outerwear climbs higher
// because branded coats and sneakers genuinely do in Egypt.
const PRODUCTS = [
  { id:1, name:"Levi's 501 Straight Jeans", cat:"Jeans", price:450, cond:"Good", size:"M", brand:"Levi's", seller:"Sara M.", desc:"Classic blue denim, light fading, no tears. The kind of pair you keep reaching for." },
  { id:2, name:"Oversized Linen Shirt", cat:"Shirts", price:280, cond:"Like New", size:"L", brand:"Zara", seller:"Omar K.", desc:"Breathable beige linen, worn twice. Perfect for Cairo summers." },
  { id:3, name:"Wool Blend Coat", cat:"Jackets", price:750, cond:"Good", size:"M", brand:"Mango", seller:"Lina A.", desc:"Charcoal, fully lined, warm without the bulk. Ideal for winter evenings." },
  { id:4, name:"Floral Summer Dress", cat:"Dresses", price:350, cond:"Like New", size:"S", brand:"H&M", seller:"Nour H.", desc:"Knee-length cotton with a soft floral print. Only worn to one wedding." },
  { id:5, name:"White Leather Sneakers", cat:"Shoes", price:650, cond:"Good", size:"42", brand:"Adidas", seller:"Youssef R.", desc:"Clean soles, minor creasing. Broken in just enough to be comfortable." },
  { id:6, name:"Canvas Tote Bag", cat:"Accessories", price:120, cond:"Fair", size:"One size", brand:"Uniqlo", seller:"Mona S.", desc:"Sturdy everyday tote with an inner pocket. Holds a laptop and then some." },
  { id:7, name:"Denim Jacket", cat:"Jackets", price:500, cond:"Good", size:"L", brand:"Pull&Bear", seller:"Omar K.", desc:"Mid-wash, metal buttons, that perfect lived-in feel. A true wardrobe staple." },
  { id:8, name:"Striped Cotton T-Shirt", cat:"Shirts", price:180, cond:"Like New", size:"S", brand:"Gap", seller:"Sara M.", desc:"Navy and white stripes, soft cotton. The easiest thing to throw on." }
];

// ===== Helper: pick the right image =====
function img(p) {
  if(typeof p.image==="string"&&/^data:image\/jpeg;base64,/.test(p.image)) return p.image;
  return PRODUCT_IMAGES[p.id] || FALLBACK_IMG;
}

// ===== Escaping & card rendering =====
function escapeHTML(value){
  return String(value).replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
}

function cardHTML(p){
  const favs = read(FAV_KEY,[]).map(String);
  const isFav = favs.includes(String(p.id));
  const name = localizedProductName(p);
  return `<article class="card">
    <button class="fav-btn ${isFav?'is-active':''}" data-fav="${escapeHTML(p.id)}"
            aria-pressed="${isFav}" aria-label="${escapeHTML(translateText(isFav?'Remove from saved':'Save this piece'))}">♥</button>
    <img src="${escapeHTML(img(p))}" alt="${escapeHTML(name)}" loading="lazy">
    <div class="body">
      <span class="tag">${escapeHTML(translateText(p.cond))}</span>
      <h3>${escapeHTML(name)}</h3>
      <p class="meta">${escapeHTML(p.brand)} · ${escapeHTML(translateText("Size"))} ${escapeHTML(translateText(p.size))} · ${currentLanguage === "ar" ? "بواسطة" : "by"} ${escapeHTML(p.seller)}</p>
      <p class="price">EGP ${Number(p.price).toFixed(2)}</p>
      <button class="btn" data-add="${escapeHTML(p.id)}">${escapeHTML(translateText("Add to cart"))}</button>
    </div>
  </article>`;
}

function localizedProductName(product) {
  const names = {1:"جينز Levi's 501 بقصة مستقيمة",2:"قميص كتان واسع",3:"معطف من مزيج الصوف",4:"فستان صيفي مزهر",5:"حذاء رياضي جلدي أبيض",6:"حقيبة قماشية",7:"سترة جينز",8:"قميص قطني مخطط"};
  return currentLanguage === "ar" ? names[product.id] || product.name : product.name;
}

function emptyStateHTML(msg){
  return `<div class="empty-state">
    <p>${msg}</p>
    <p><a href="sell.html" class="link">Be the first to list something new →</a></p>
  </div>`;
}

function render(list,target){
  const el=document.querySelector(target); if(!el) return;
  el.innerHTML = list.length ? list.map(cardHTML).join("")
                             : emptyStateHTML("Nothing here yet — try a different filter, or check back soon.");
}

// ===== Filters =====
function applyFilters(){
  const qEl=document.querySelector("#search");
  const catEl=document.querySelector("#category");
  const sizeEl=document.querySelector("#size");
  const minPriceEl=document.querySelector("#min-price");
  const maxPriceEl=document.querySelector("#max-price");
  const sortEl=document.querySelector("#sort");
  if(!qEl||!catEl||!sizeEl||!minPriceEl||!maxPriceEl||!sortEl) return;

  const q=qEl.value.toLowerCase();
  const cat=catEl.value;
  const size=sizeEl.value.trim().toLowerCase();
  const minPrice=minPriceEl.value===""?null:Number(minPriceEl.value);
  const maxPrice=maxPriceEl.value===""?null:Number(maxPriceEl.value);
  const sort=sortEl.value;

  let list=allProducts.filter(p=>
    (cat==="all"||p.cat===cat) &&
    (!size||String(p.size).trim().toLowerCase()===size) &&
    (minPrice===null||p.price>=minPrice) &&
    (maxPrice===null||p.price<=maxPrice) &&
    (p.name+p.brand+localizedProductName(p)).toLowerCase().includes(q)
  );
  if(sort==="newest") list.sort((a,b)=>(Date.parse(b.createdAt)||0)-(Date.parse(a.createdAt)||0));
  if(sort==="low")  list.sort((a,b)=>a.price-b.price);
  if(sort==="high") list.sort((a,b)=>b.price-a.price);

  render(list,"#products");

  const count=document.querySelector("#results-count");
  if(count) count.textContent = currentLanguage === "ar"
    ? `${list.length} قطعة متاحة`
    : `${list.length} ${list.length===1?"piece":"pieces"} found`;
}

function clearShopFilters(){
  ["#search","#min-price","#max-price"].forEach(selector=>{
    const input=document.querySelector(selector);
    if(input) input.value="";
  });
  const category=document.querySelector("#category");
  const size=document.querySelector("#size");
  const sort=document.querySelector("#sort");
  if(category) category.value="all";
  if(size) size.value="";
  if(sort) sort.value="newest";
  applyFilters();
}

// ===== Load listings =====
async function loadListings(){
  const status=document.querySelector("#listing-status, #checkout-status");
  allProducts=[...PRODUCTS,...read(LISTINGS_KEY,[])];
  try{
    const response=await fetch("listings.json");
    if(!response.ok) throw new Error(`Could not load listings.json (${response.status}).`);
    const listings=await response.json();
    if(!Array.isArray(listings)) throw new Error("listings.json must contain a JSON list.");
    const valid=listings.every(p=>p&&typeof p.id==="string"&&p.id.length>0&&typeof p.name==="string"&&p.name.trim().length>0&&["Shirts","Jeans","Jackets","Dresses","Shoes","Accessories"].includes(p.cat)&&Number.isFinite(p.price)&&p.price>0&&["Like New","Good","Fair"].includes(p.cond)&&typeof p.size==="string"&&p.size.trim().length>0&&typeof p.brand==="string"&&typeof p.seller==="string"&&p.seller.trim().length>0&&(p.image===undefined||typeof p.image==="string"&&/^data:image\/jpeg;base64,[A-Za-z0-9+/]+=*$/.test(p.image)));
    if(!valid) throw new Error("A listing in listings.json is missing required fields.");
    allProducts=[...PRODUCTS,...listings,...read(LISTINGS_KEY,[])];
  }catch(error){
    if(status) status.textContent = `Could not load saved listings — run the site through a local server and make sure listings.json exists. (${error.message})`;
  }
  if(document.querySelector("#products")) applyFilters();
  if(document.querySelector("#cart-items")) renderCart();
}

// ===== Sell form =====
async function saveListing(event){
  event.preventDefault();
  const form=event.currentTarget;
  if(!form.reportValidity()) return;
  const formData=new FormData(form);
  const status=document.querySelector("#sell-status");
  const submit=form.querySelector('button[type="submit"]');
  const photo=formData.get("photo");
  if(photo instanceof File&&photo.size>0&&!['image/jpeg','image/png','image/webp'].includes(photo.type)){
    if(status) status.textContent=translateText("Choose a JPG, PNG, or WebP image.");
    return;
  }
  if(photo instanceof File&&photo.size>8*1024*1024){
    if(status) status.textContent=translateText("Choose an image smaller than 8 MB.");
    return;
  }

  if(submit) submit.disabled=true;
  try{
    const saved=read(LISTINGS_KEY,[]);
    if(!Array.isArray(saved)) throw new Error("storage");
    const listing={
      id:`local-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,
      createdAt:new Date().toISOString(),
      name:String(formData.get("name")).trim(),
      cat:String(formData.get("cat")),
      price:Number(formData.get("price")),
      cond:String(formData.get("cond")),
      size:String(formData.get("size")).trim(),
      brand:String(formData.get("brand")).trim()||"Unbranded",
      seller:String(formData.get("seller")).trim(),
      desc:String(formData.get("desc")).trim()
    };
    if(photo instanceof File&&photo.size>0) listing.image=await resizeListingImage(photo);
    saved.push(listing);
    write(LISTINGS_KEY,saved);
    form.reset();
    if(status) status.textContent=translateText("Listed! Your piece is now live in the shop — refresh to see it.");
  }catch(error){
    if(status) status.textContent=translateText(error instanceof Error&&error.message==="image-processing"
      ? "The image could not be processed. Try another image."
      : "Your listing could not be saved in this browser. Free up storage and try again.");
  }finally{
    if(submit) submit.disabled=false;
  }
}

function resizeListingImage(file){
  return new Promise((resolve,reject)=>{
    const reader=new FileReader();
    reader.onerror=()=>reject(new Error("image-processing"));
    reader.onload=()=>{
      const image=new Image();
      image.onerror=()=>reject(new Error("image-processing"));
      image.onload=()=>{
        const scale=Math.min(1,1200/Math.max(image.naturalWidth,image.naturalHeight));
        const canvas=document.createElement("canvas");
        canvas.width=Math.max(1,Math.round(image.naturalWidth*scale));
        canvas.height=Math.max(1,Math.round(image.naturalHeight*scale));
        const context=canvas.getContext("2d");
        if(!context) return reject(new Error("image-processing"));
        context.drawImage(image,0,0,canvas.width,canvas.height);
        canvas.toBlob(blob=>{
          if(!blob) return reject(new Error("image-processing"));
          const encoded=new FileReader();
          encoded.onerror=()=>reject(new Error("image-processing"));
          encoded.onload=()=>resolve(String(encoded.result));
          encoded.readAsDataURL(blob);
        },"image/jpeg",0.8);
      };
      image.src=String(reader.result);
    };
    reader.readAsDataURL(file);
  });
}

// ===== Cart =====
function addToCart(id){
  const cart=read(CART_KEY,[]).map(String), key=String(id);
  if(!cart.includes(key)) cart.push(key);
  write(CART_KEY,cart); updateCartCount();
}
function updateCartCount(){
  const cart=[...new Set(read(CART_KEY,[]).map(String))];
  write(CART_KEY,cart);
  const c=document.querySelector("#cart-count"); if(c) c.textContent=cart.length;
}
function renderCart(){
  const cart=new Set(read(CART_KEY,[]).map(String));
  const items=allProducts.filter(p=>cart.has(String(p.id)));
  const el=document.querySelector("#cart-items");
  if(!el) return;
  el.innerHTML = items.length
    ? items.map(p=>`<article class="card"><div class="body">
      <h2>${escapeHTML(localizedProductName(p))}</h2>
      <p class="meta">${escapeHTML(p.brand)} · ${escapeHTML(translateText("Size"))} ${escapeHTML(translateText(p.size))}</p>
        <p class="price">EGP ${Number(p.price).toFixed(2)}</p>
      <button class="btn alt" type="button" data-remove="${escapeHTML(p.id)}">${escapeHTML(translateText("Remove"))}</button>
      </div></article>`).join("")
    : `<div class="empty-state">
         <p>Your cart is empty.</p>
         <p><a href="shop.html" class="link">Find something you'll love →</a></p>
       </div>`;
  const total=document.querySelector("#cart-total");
  if(total) total.textContent=`EGP ${items.reduce((s,p)=>s+Number(p.price),0).toFixed(2)}`;
  const btn=document.querySelector("#place-order");
  if(btn) btn.disabled = items.length===0;
}
function placeDemoOrder(){
  const cart=read(CART_KEY,[]);
  if(!cart.length) return;
  write(CART_KEY,[]);
  updateCartCount();
  renderCart();
  const st=document.querySelector("#checkout-status");
  if(st) st.textContent="Demo order placed — nothing was charged. Thanks for trying ReWear!";
}

// ===== Favourites =====
function toggleFav(id){
  const favs=read(FAV_KEY,[]).map(String);
  const i=favs.indexOf(String(id));
  if(i>-1) favs.splice(i,1); else favs.push(String(id));
  write(FAV_KEY,favs);
  return favs.includes(String(id));
}

// ===== Auth =====
function validateSignup(e){
  e.preventDefault();
  const f=e.target, err=f.querySelector(".error");
  if(!f.name.value.trim()) return err.textContent="Please enter your name.";
  const email=f.email.value.trim(), pass=f.password.value;
  if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return err.textContent="That email doesn't look right — mind checking it?";
  if(pass.length<8||!/\d/.test(pass)) return err.textContent="Passwords need at least 8 characters and one number.";
  if(pass!==f.confirm.value) return err.textContent="The two passwords don't match.";
  const users=read(USERS_KEY,[]);
  if(users.some(u=>u.email===email)) return err.textContent="That email's already registered. Try signing in instead.";
  users.push({name:f.name.value.trim(),email,pass}); write(USERS_KEY,users);
  location.href="signin.html";
}
function validateSignin(e){
  e.preventDefault();
  const f=e.target, err=f.querySelector(".error");
  const u=read(USERS_KEY,[]).find(u=>u.email===f.email.value.trim()&&u.pass===f.password.value);
  if(!u) return err.textContent="We couldn't match that email and password. Try again?";
  write("rewear_session",{name:u.name});
  location.href="index.html";
}

// ===== Contact =====
function handleContactSubmit(e){
  e.preventDefault();
  const st=document.querySelector("#contact-status");
  if(st) st.textContent="Thanks — this demo has no inbox yet, so your message wasn't sent. In a live version, we'd reply within 1–2 days.";
}

// ===== Newsletter =====
function initNewsletter(){
  const form=document.querySelector("#newsletter-form");
  if(!form) return;
  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const status=form.querySelector(".newsletter-status");
    const email=form.querySelector("input[type=email]").value.trim();
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){
      status.textContent="That email doesn't look right — mind checking it?";
      status.classList.add("is-error");
      return;
    }
    status.classList.remove("is-error");
    status.textContent="You're in! (Demo only — nothing was actually sent.)";
    form.reset();
  });
}

// ===== Impact calculator =====
function initImpactCalc(){
  const slider=document.querySelector("#impact-slider");
  if(!slider) return;
  const countEl=document.querySelector("#impact-count");
  const waterEl=document.querySelector("#impact-water");
  const co2El=document.querySelector("#impact-co2");
  const showersEl=document.querySelector("#impact-showers");
  const WATER_PER=2700, CO2_PER=10;
  const update=()=>{
    const n=Number(slider.value);
    countEl.textContent=n;
    const water=n*WATER_PER;
    const co2=n*CO2_PER;
    waterEl.textContent = water.toLocaleString()+" L";
    co2El.textContent   = co2.toLocaleString()+" kg";
    showersEl.textContent = Math.round(water/65).toLocaleString();
  };
  slider.addEventListener("input",update);
  update();
}

// ===== Stats count-up =====
function initStats(){
  const nums=document.querySelectorAll("[data-count]");
  if(!nums.length) return;
  const animate=(el)=>{
    const target=Number(el.dataset.count);
    const suffix=el.dataset.suffix||"";
    const dur=1600, start=performance.now();
    const step=(now)=>{
      const p=Math.min((now-start)/dur,1);
      const eased=1-Math.pow(1-p,3);
      el.textContent=Math.round(target*eased).toLocaleString()+suffix;
      if(p<1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if(!("IntersectionObserver" in window)){ nums.forEach(animate); return; }
  const io=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ animate(e.target); io.unobserve(e.target); }});
  },{threshold:.5});
  nums.forEach(n=>io.observe(n));
}

// ===== Reveal on scroll =====
function initReveal(){
  const els=document.querySelectorAll(".reveal");
  if(!els.length) return;
  if(!("IntersectionObserver" in window)){ els.forEach(e=>e.classList.add("is-visible")); return; }
  const io=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("is-visible"); io.unobserve(e.target); }});
  },{threshold:.12});
  els.forEach(e=>io.observe(e));
}

// ===== Boot =====
document.addEventListener("DOMContentLoaded",()=>{
  initLanguageSelector();
  updateCartCount();
  render(PRODUCTS.slice(0,4),"#featured");

  if(document.querySelector("#products")){
    loadListings();
    ["#search","#category","#size","#min-price","#max-price","#sort"].forEach(s=>{
      const el=document.querySelector(s);
      if(el) el.addEventListener(el.tagName==="SELECT"?"change":"input",applyFilters);
    });
    const clear=document.querySelector("#clear-filters");
    if(clear) clear.addEventListener("click",clearShopFilters);
  }

  // Delegated clicks: add / remove / favourite
  document.body.addEventListener("click",(e)=>{
    const add=e.target.closest("[data-add]");
    if(add){ addToCart(add.dataset.add); return; }

    const rem=e.target.closest("[data-remove]");
    if(rem){
      write(CART_KEY,read(CART_KEY,[]).map(String).filter(id=>id!==rem.dataset.remove));
      updateCartCount(); renderCart(); return;
    }

    const fav=e.target.closest("[data-fav]");
    if(fav){
      const active=toggleFav(fav.dataset.fav);
      fav.classList.toggle("is-active",active);
      fav.setAttribute("aria-pressed",String(active));
      fav.setAttribute("aria-label",translateText(active?"Remove from saved":"Save this piece"));
    }
  });

  const order=document.querySelector("#place-order");
  if(order) order.addEventListener("click",placeDemoOrder);

  if(document.querySelector("#cart-items")) loadListings();

  const su=document.querySelector("#signup-form"); if(su) su.addEventListener("submit",validateSignup);
  const si=document.querySelector("#signin-form"); if(si) si.addEventListener("submit",validateSignin);
  const sellForm=document.querySelector("#sell-form"); if(sellForm) sellForm.addEventListener("submit",saveListing);
  const contactForm=document.querySelector("#contact-form"); if(contactForm) contactForm.addEventListener("submit",handleContactSubmit);

  initNewsletter();
  initImpactCalc();
  initStats();
  initReveal();
});