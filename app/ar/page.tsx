import Image from 'next/image'
import Link from 'next/link'

const WHY_ITEMS = [
  {
    n: '٠١',
    title: 'توقيت الإمارات. ردّ في 24 ساعة.',
    text: 'نفس المنطقة الزمنية كوكالتكم. ضمان الرد خلال 24 ساعة.',
    tag: 'ضمان الرد خلال 24 ساعة',
  },
  {
    n: '٠٢',
    title: 'خبرة حلال حقيقية',
    text: 'ندير مطعماً يابانياً حلالاً في دبي (rayu). نتحقق من الشهادات بأنفسنا.',
    tag: '+500 مطعم موثّق',
  },
  {
    n: '٠٣',
    title: 'اليابان فقط',
    text: '6 وجهات أساسية. معرفة عميقة وعلاقات مباشرة مع الموردين.',
    tag: '6 وجهات أساسية',
  },
  {
    n: '٠٤',
    title: 'للشركات فقط. بلا استثناء.',
    text: 'أسعار الجملة، وثائق التجارة، ولن نتنافس مع عملائكم أبداً.',
    tag: 'لا بيع مباشر للمسافرين',
  },
]

const STEPS = [
  {
    n: '٠١',
    title: 'أرسل لنا ملخص الرحلة',
    text: 'تواصل معنا عبر واتساب أو البريد الإلكتروني بالتفاصيل الأساسية.',
    cta: true,
  },
  {
    n: '٠٢',
    title: 'استلم العرض خلال 24 ساعة',
    text: 'خطة تفصيلية مع خيارات الفنادق والأنشطة والمطاعم الحلال.',
  },
  {
    n: '٠٣',
    title: 'اعتمد وسنتولى الباقي',
    text: 'نحجز كل شيء: فنادق، مواصلات، مرشدين، مطاعم، ترتيبات الصلاة.',
  },
]

const HALAL_ITEMS = [
  { text: 'مطاعم حلال موثّقة ومعتمدة. نتحقق من الشهادات مباشرةً — لا تكفي عبارة "بلا لحم خنزير". +500 مطعم مُعيَّن عبر الوجهات الست.' },
  { text: 'أوقات الصلاة واتجاه القبلة في كل فندق. مواقع المساجد وجداول يومية واتجاه القبلة داخل الغرف — مؤكَّدة قبل تسجيل الوصول.' },
  { text: 'حمامات المياه الساخنة (أونسن) مفصولة بين الجنسين. فنادق ريوكان بخيارات خاصة أو مخصصة للنساء — يُرتَّب مسبقاً.' },
  { text: 'مرشدون يتحدثون العربية في المدن الرئيسية، ليتواصل عملاؤكم ويشعروا بالراحة من لحظة الوصول حتى المغادرة.' },
  { text: 'برامج مراعية لشهر رمضان. أوقات طعام معدَّلة، خيارات للسحور والإفطار، وجداول مبنية على التقويم الإسلامي عند الحاجة.' },
]

export const metadata = {
  title: 'KIZUNA Journey — شريككم في السياحة اليابانية من الإمارات',
  description: 'متخصصون في السياحة اليابانية من دبي لوكالات السفر في الإمارات والشرق الأوسط. خبرة حلال موثّقة، للشركات فقط، على توقيت الإمارات.',
  openGraph: {
    title: 'KIZUNA Journey — بوابتكم إلى اليابان',
    description: 'مقرنا دبي. توقيت الإمارات. شريك B2B متخصص في اليابان لوكالات السفر في الشرق الأوسط.',
    type: 'website' as const,
    images: ['/images/hero_sakura.jpg'],
  },
}

export default function ArabicPage() {
  return (
    <div dir="rtl">
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero_sakura.jpg"
          alt="اليابان — أزهار الكرز"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/70 via-navy-dark/50 to-navy-dark/80" />

        <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-gold/30 bg-gold/10 text-gold text-[10px] tracking-[0.15em] uppercase px-4 py-2 mb-8">
            مقرنا دبي · متخصصون في اليابان · للشركات فقط
          </div>
          <h1 className="font-fraunces text-5xl md:text-7xl font-light text-white leading-[1.15] mb-6">
            بوابتكم إلى <em className="text-gold not-italic">اليابان.</em>
          </h1>
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            المتخصص الوحيد في السياحة اليابانية في الإمارات — يعمل على توقيت الإمارات، بخبرة حلال موثّقة، حصرياً لوكالات السفر.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/971509509781?text=مرحباً%2C%20أنا%20وكيل%20سفر%20وأودّ%20الاستفسار%20عن%20برامج%20اليابان."
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1cb956] text-white text-[12px] font-medium tracking-[0.08em] uppercase px-7 py-4 transition-colors duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              تواصل عبر واتساب
            </a>
            <Link
              href="/ar/services"
              className="inline-flex items-center gap-2 border border-white/30 text-white hover:border-white text-[12px] font-medium tracking-[0.08em] uppercase px-7 py-4 transition-colors duration-200"
            >
              خدماتنا
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/30 text-[10px] tracking-[0.2em] uppercase">تمرير</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* ── TICKER ───────────────────────────────────────── */}
      <div className="bg-gold/10 border-y border-gold/20 py-3 overflow-hidden">
        <div className="animate-ticker flex whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="flex items-center gap-8 pr-8 text-[11px] tracking-[0.15em] text-gold/80">
              <span>مقرنا دبي</span>
              <span className="text-gold/40">·</span>
              <span>ردّ على توقيت الإمارات</span>
              <span className="text-gold/40">·</span>
              <span>+500 مطعم حلال موثّق</span>
              <span className="text-gold/40">·</span>
              <span>6 وجهات أساسية</span>
              <span className="text-gold/40">·</span>
              <span>للشركات فقط — لا بيع مباشر</span>
              <span className="text-gold/40">·</span>
              <span>ضمان العرض خلال 24 ساعة</span>
              <span className="text-gold/40">·</span>
              <span>دعم بالعربية والإنجليزية</span>
              <span className="text-gold/40">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── TRUST STATS BAR ──────────────────────────────── */}
      <section className="bg-navy border-b border-white/5">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-x-reverse divide-white/8">
            {[
              { value: '+500', label: 'مطعم حلال موثّق', sub: 'عبر الوجهات الست جميعها' },
              { value: '24h', label: 'ضمان العرض', sub: 'ردّ في يوم العمل الإماراتي' },
              { value: '100%', label: 'للشركات فقط', sub: 'لا بيع مباشر للمسافرين أبداً' },
              { value: '6', label: 'وجهات أساسية', sub: 'شبكة موردين محلية عميقة' },
            ].map((stat) => (
              <div key={stat.value} className="py-10 px-8 text-center first:pr-0 last:pl-0">
                <div className="font-fraunces text-4xl md:text-5xl font-light text-gold mb-1 leading-none">{stat.value}</div>
                <div className="text-[12px] font-semibold text-white tracking-wide mb-1">{stat.label}</div>
                <div className="text-[11px] text-white/35 tracking-wide">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY KIZUNA ───────────────────────────────────── */}
      <section id="why" className="py-24 bg-off-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
            <div>
              <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-4">لماذا KIZUNA</div>
              <h2 className="font-fraunces text-4xl md:text-5xl font-light text-navy leading-[1.15] mb-5">
                ما يميّزنا عن غيرنا
              </h2>
              <p className="text-[14px] text-muted leading-8">
                معظم شركات السياحة اليابانية مقرّها اليابان — بتوقيتها وبمحدودية فهمها لما يحتاجه المسافر من الشرق الأوسط. نحن نعمل من دبي، على توقيتكم.
              </p>
            </div>
            <div className="flex flex-col divide-y divide-black/5">
              {WHY_ITEMS.map((item) => (
                <div key={item.n} className="flex gap-6 py-8">
                  <span className="font-fraunces text-4xl font-light text-gold/25 leading-none w-12 shrink-0">{item.n}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-[13px] font-semibold text-navy mb-2 tracking-wide">{item.title}</div>
                    <p className="text-[13px] text-muted leading-8">{item.text}</p>
                  </div>
                  <div className="hidden md:block shrink-0">
                    <span className="border border-gold/25 text-gold/70 text-[10px] tracking-[0.08em] px-3 py-1.5 whitespace-nowrap">
                      {item.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ──────────────────────────────────── */}
      <section className="py-24 bg-navy-dark">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16">
            <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-4">لوكالات السفر</div>
            <h2 className="font-fraunces text-4xl md:text-5xl font-light text-white leading-[1.15] mb-5">
              كيف تبدأ العمل معنا
            </h2>
            <p className="text-[14px] text-white/45 leading-8 max-w-xl mx-auto">
              ثلاث خطوات من التواصل الأول إلى تأكيد البرنامج. لا إجراءات تسجيل معقّدة، ولا حدّ أدنى للحجم.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-[1px] bg-white/5">
            {STEPS.map((step) => (
              <div key={step.n} className="relative bg-navy-dark p-10">
                <div className="font-fraunces text-[80px] font-light text-white/4 leading-none absolute top-6 left-8 select-none">
                  {step.n}
                </div>
                <div className="text-[10px] tracking-[0.16em] uppercase text-gold/60 mb-3">الخطوة {step.n}</div>
                <h3 className="text-[15px] font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-[13px] text-white/40 leading-8">{step.text}</p>
                {step.cta && (
                  <div className="mt-6">
                    <a
                      href="https://wa.me/971509509781?text=مرحباً%2C%20أودّ%20البدء%20في%20العمل%20مع%20KIZUNA%20Journey%20كشريك%20تجاري."
                      target="_blank"
                      rel="noopener"
                      className="inline-block border border-white/20 hover:border-white/50 text-white text-[11px] tracking-[0.1em] px-4 py-2.5 transition-colors duration-200"
                    >
                      أرسل ملخّصك عبر واتساب
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-6 p-6 border-r-2 border-l-0 border-gold bg-white/3 max-w-xl">
            <p className="text-[13px] text-white/45 leading-8">
              <strong className="text-white">لا حدّ أدنى للحجم.</strong> سواء أرسلت عائلة واحدة أو عشر مجموعات سنوياً، نتعامل معك بالطريقة ذاتها.
            </p>
          </div>
        </div>
      </section>

      {/* ── DESTINATIONS PREVIEW ─────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-4">الوجهات</div>
              <h2 className="font-fraunces text-4xl md:text-5xl font-light text-navy leading-[1.15]">
                ست وجهات.<br />خبرة عميقة.
              </h2>
            </div>
            <Link href="/destinations" className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold hover:text-gold-dark border-b border-gold/30 pb-0.5 transition-colors duration-200 shrink-0">
              عرض جميع الوجهات ←
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
            {[
              { label: 'طوكيو', img: '/images/dest-tokyo.jpg' },
              { label: 'كيوتو', img: '/images/dest-kyoto.jpg' },
              { label: 'أوساكا', img: '/images/dest-osaka-final.jpg' },
              { label: 'هاكوني', img: '/images/dest-hakone-final.jpg' },
              { label: 'هوكايدو', img: '/images/dest-hokkaido-final.jpg' },
              { label: 'أوكيناوا', img: '/images/dest-okinawa-final.jpg' },
            ].map((dest) => (
              <Link key={dest.label} href="/destinations" className="group relative aspect-[4/5] overflow-hidden bg-navy block">
                <Image
                  src={dest.img}
                  alt={dest.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 right-0 p-5">
                  <div className="font-fraunces text-xl font-light italic text-white">{dest.label}</div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HALAL ─────────────────────────────────────────── */}
      <section id="halal" className="py-24 bg-off-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="text-center md:text-right">
              <div className="font-fraunces text-[100px] md:text-[130px] font-light text-navy leading-none mb-2">+500</div>
              <div className="text-[13px] text-muted leading-8">مطعم حلال موثّق<br />عبر الوجهات الست جميعها</div>
            </div>
            <div>
              <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-4">خبرة الحلال</div>
              <h2 className="font-fraunces text-3xl md:text-4xl font-light text-navy leading-[1.2] mb-5">
                نعرف مشهد الحلال في اليابان أفضل من أي شخص آخر.
              </h2>
              <p className="text-[13px] text-muted leading-8 mb-8">
                ندير مطعماً يابانياً حلالاً في دبي — rayu. هذه التجربة المباشرة تجعلنا نتحقق من شهادات الحلال بأنفسنا ونعرف ما تحتاجه الأسر المسلمة فعلياً.
              </p>
              <ul className="flex flex-col gap-5">
                {HALAL_ITEMS.map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="w-5 h-5 border border-gold/40 flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 20 20" fill="none" stroke="#C09240" strokeWidth="2">
                        <path d="M4 10.5l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="text-[13px] text-muted leading-8">{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAR ───────────────────────────────────────── */}
      <div className="bg-gold py-14">
        <div className="max-w-[1200px] mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-white/60 mb-2">هل أنتم مستعدون للشراكة معنا؟</div>
            <h3 className="font-fraunces text-3xl font-light text-white mb-2">أرسلوا لنا أول ملخّص لرحلتكم.</h3>
            <p className="text-[13px] text-white/70 leading-8 max-w-lg">
              لا حدّ أدنى للحجم. لا إجراءات تسجيل. فقط واتساب أو بريد إلكتروني بتفاصيل عميلكم — نردّ في نفس يوم العمل.
            </p>
          </div>
          <a
            href="https://wa.me/971509509781?text=مرحباً%2C%20أنا%20وكيل%20سفر%20وأودّ%20مناقشة%20برامج%20اليابان%20لعملائي."
            target="_blank"
            rel="noopener"
            className="shrink-0 inline-flex items-center gap-2.5 bg-white text-gold hover:bg-white/90 text-[12px] font-semibold tracking-[0.08em] uppercase px-8 py-4 transition-colors duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            ابدأ عبر واتساب
          </a>
        </div>
      </div>

      {/* ── CONTACT ───────────────────────────────────────── */}
      <section id="contact" className="py-24 bg-off-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold mb-4">تواصل معنا</div>
              <h2 className="font-fraunces text-4xl md:text-5xl font-light text-navy leading-[1.15] mb-5">
                تواصل معنا
              </h2>
              <p className="text-[14px] text-muted leading-8 mb-8">
                أسرع طريقة للوصول إلينا هي واتساب — نردّ في نفس يوم العمل على توقيت الإمارات.
              </p>
              <div className="inline-block border border-gold/30 bg-gold/5 text-[12px] text-muted leading-6 px-5 py-3 mb-8">
                لوكالات السفر ومنظّمي الرحلات فقط.<br />
                لا نبيع مباشرةً للمسافرين.
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href="https://wa.me/971509509781"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-4 p-4 bg-white hover:bg-white/70 border border-black/5 hover:border-gold/20 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 bg-[#25D366]/10 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-[11px] tracking-[0.1em] text-muted/60 mb-0.5">واتساب</div>
                    <div className="text-[14px] font-medium text-navy">+971 50 950 9781</div>
                  </div>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold/40 group-hover:text-gold transition-colors rotate-180">
                    <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a
                  href="mailto:ryoma@kizuna-journey.com"
                  className="flex items-center gap-4 p-4 bg-white hover:bg-white/70 border border-black/5 hover:border-gold/20 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 bg-gold/8 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C09240" strokeWidth="1.5">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M2 7l10 7 10-7" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-[11px] tracking-[0.1em] text-muted/60 mb-0.5">البريد الإلكتروني</div>
                    <div className="text-[14px] font-medium text-navy" dir="ltr">ryoma@kizuna-journey.com</div>
                  </div>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold/40 group-hover:text-gold transition-colors rotate-180">
                    <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Info panel */}
            <div className="flex flex-col gap-1">
              <div className="bg-navy p-8">
                <div className="text-[10px] tracking-[0.18em] uppercase text-gold/50 mb-6">معلومات الشركة</div>
                <div className="flex flex-col gap-5">
                  {[
                    ['الشركة', 'KIZUNA Journey FZCO'],
                    ['المقرّ', 'المحل 38، واصل فيتا مول، جميرا 1، دبي'],
                    ['التأسيس', 'يناير 2025، دبي، الإمارات'],
                    ['التخصص', 'سياحة B2B إلى اليابان للشرق الأوسط'],
                    ['العمليات', 'للشركات فقط — وكالات السفر ومنظّمو الرحلات'],
                  ].map(([label, value]) => (
                    <div key={label} className="flex gap-4 text-[12px] border-b border-white/5 pb-5 last:border-0 last:pb-0">
                      <span className="text-white/25 shrink-0 w-24">{label}</span>
                      <span className="text-white/55" dir={label === 'الشركة' ? 'ltr' : 'rtl'}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gold/8 border border-gold/20 p-6">
                <p className="text-[13px] text-navy/70 leading-8">
                  <strong className="text-navy">خدمة باللغة العربية.</strong> نتواصل بالعربية والإنجليزية. فريقنا يفهم احتياجات السوق الخليجية.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
