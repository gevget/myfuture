import { useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Buildings,
  Briefcase,
  CaretDown,
  ChartLineUp,
  Check,
  Compass,
  Cpu,
  Database,
  Eye,
  GraduationCap,
  Handshake,
  Lightning,
  List,
  ListChecks,
  LockKey,
  MapPin,
  ShieldCheck,
  Sparkle,
  Target,
  TrendUp,
  UsersThree,
  WarningCircle,
  X,
} from '@phosphor-icons/react'

const A = `${import.meta.env.BASE_URL}assets/`

type IconType = typeof Sparkle

const navItems = [
  ['О проекте', 'about'],
  ['Как работает', 'how-it-works'],
  ['Для кого', 'audiences'],
  ['Пилот', 'pilot'],
  ['Модель', 'model'],
  ['Команда', 'team'],
] as const

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function Button({ children, variant = 'primary', onClick, href }: { children: React.ReactNode; variant?: 'primary' | 'secondary' | 'text'; onClick?: () => void; href?: string }) {
  const className = `button button-${variant}`
  if (href) return <a className={className} href={href} onClick={onClick}>{children}</a>
  return <button className={className} onClick={onClick}>{children}</button>
}

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className={`site-header ${open ? 'menu-open' : ''}`}>
      <div className="header-inner">
        <a className="brand" href="#hero" aria-label="Моё Будущее — на главную">
          <img src={`${A}logo.png`} alt="Моё Будущее" />
        </a>
        <nav className="desktop-nav" aria-label="Основная навигация">
          {navItems.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
        <Button href="#contact">Обсудить пилот <ArrowRight size={16} weight="bold" /></Button>
        <button className="menu-toggle" aria-label={open ? 'Закрыть меню' : 'Открыть меню'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <List size={24} />}
        </button>
      </div>
      <div className="mobile-menu" aria-hidden={!open}>
        {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
        <Button href="#contact" onClick={() => setOpen(false)}>Обсудить пилот <ArrowRight size={16} weight="bold" /></Button>
      </div>
    </header>
  )
}

function SectionHeading({ eyebrow, title, lead, align = 'left' }: { eyebrow: string; title: string; lead?: string; align?: 'left' | 'center' }) {
  return <div className={`section-heading align-${align}`}>
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {lead && <p className="lead">{lead}</p>}
  </div>
}

function IconBadge({ icon: Icon, tone = 'green' }: { icon: IconType; tone?: 'green' | 'cyan' | 'orange' | 'lavender' }) {
  return <span className={`icon-badge tone-${tone}`}><Icon size={22} weight="duotone" /></span>
}

function Accordion({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  return <div className={`accordion ${open ? 'is-open' : ''}`}>
    <button onClick={() => setOpen(!open)} aria-expanded={open}>
      <span>{title}</span><CaretDown size={19} weight="bold" />
    </button>
    <div className="accordion-content"><div>{children}</div></div>
  </div>
}

function ArrowLink({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return <button className="arrow-link" onClick={onClick}>{children}<ArrowRight size={17} weight="bold" /></button>
}

const audienceData: { label: string; icon: IconType; title: string; items: string[] }[] = [
  { label: 'Государство и регион', icon: Buildings, title: 'Управлять кадровой политикой на данных', items: ['карта склонностей поколения', 'прогноз кадровой структуры территории', 'понимание потенциального дефицита по направлениям', 'планирование образовательной инфраструктуры', 'база для долгосрочных кадровых программ', 'динамика результатов в разрезе территории'] },
  { label: 'Предприятия', icon: Briefcase, title: 'Планировать кадровую воронку заранее', items: ['агрегированный прогноз по направлениям и территории', 'раннее понимание кадровых разрывов', 'планирование целевых образовательных программ', 'возможность заранее участвовать в подготовке кадров', 'данные для долгосрочных инвестиционных программ'] },
  { label: 'ВУЗы и СПО', icon: GraduationCap, title: 'Понимать будущую структуру образовательного спроса', items: ['прогноз интереса к направлениям', 'планирование набора и программ', 'взаимодействие с территориями и предприятиями', 'ранняя работа с образовательными траекториями'] },
  { label: 'Школы', icon: UsersThree, title: 'Видеть картину класса, а не отдельный тест', items: ['агрегированный портрет класса', 'динамика интересов', 'рекомендации по дополнительным программам', 'понимание востребованных кружков и направлений', 'основание для изменения внеурочной среды'] },
  { label: 'Институты развития', icon: ChartLineUp, title: 'Оценивать кадровые проекты на понятной базе', items: ['кадровый фактор в инвестиционной модели территории', 'агрегированная аналитика по будущему кадровому потоку', 'участие в долгосрочных программах', 'оценка инфраструктурных и образовательных инициатив'] },
]

const steps = [
  ['01', 'Сбор', 'Класс проходит короткие адаптивные игровые сценарии.', Database],
  ['02', 'Личный результат', 'Ребёнок получает собственный результат в приватном формате.', Eye],
  ['03', 'Агрегация', 'Для внешней аналитики формируются срезы: класс, школа, территория.', UsersThree],
  ['04', 'Дополнение', 'По мере развития подключаются разрешённые образовательные сигналы.', ListChecks],
  ['05', 'Анализ', 'ИИ выявляет устойчивые тенденции и динамику групп.', Cpu],
  ['06', 'Прогноз', 'Участники получают свой уровень агрегированной аналитики.', TrendUp],
] as const

const roadmap = [
  ['Этап 0', 'Пилот', 'Ограниченная территория, базовая диагностика, профиль групп, проверка гипотез.', '2026'],
  ['Этап 1', 'Муниципальный уровень', 'Расширение на школы территории, локальная аналитика, подключение партнёров.', '2027–2028'],
  ['Этап 2', 'Региональная платформа', 'Прогноз кадров, межведомственная аналитика, взаимодействие с предприятиями.', 'Далее'],
  ['Этап 3', 'Межрегиональная экосистема', 'Связка школа → СПО/ВУЗ → работодатель и масштабирование методологии.', 'Перспектива'],
]

const team = [
  { name: 'Михаил Вялов', role: 'Образовательные решения и внедрение', short: 'Основатель и управляющий директор «Сокол ПРО». Опыт комплексного оснащения образовательных учреждений, лабораторий, агротехклассов и инженерных пространств.', contact: '@omtatsat0', photo: 'team-mikhail-vyalov' },
  { name: 'Михаил Юматов', role: 'Архитектура систем и образование', short: 'Директор и учредитель Digital-агентства USIT. Опыт в архитектуре сложных информационных систем, облачных решениях и инженерном дополнительном образовании.', contact: '@mixayumatov', photo: 'team-mikhail-yumatov' },
  { name: 'Евгений Толченков', role: 'Продуктовый дизайн и цифровые продукты', short: 'Основатель студии дизайна и разработки сложных цифровых продуктов TOLK. Опыт продуктового дизайна, управления дизайном и крупных проектов.', contact: '@gevget', photo: 'team-evgeny-tolchenkov' },
]

function HeroVisual() {
  return <div className="hero-visual visual-orbit">
    <div className="orbit-glow glow-a" /><div className="orbit-glow glow-b" />
    <div className="orbit-node node-school"><GraduationCap size={21} weight="duotone" /><span>Школа</span></div>
    <div className="orbit-node node-city"><Buildings size={21} weight="duotone" /><span>Территория</span></div>
    <div className="orbit-node node-work"><Briefcase size={21} weight="duotone" /><span>Работа</span></div>
    <div className="orbit-route route-one" /><div className="orbit-route route-two" /><div className="orbit-route route-three" />
    <div className="hero-child"><img src={`${A}image 961.png`} alt="Ребёнок с планшетом и маршрутами развития" /></div>
    <div className="visual-caption"><span className="caption-dot" /> Система видит динамику поколения</div>
  </div>
}

function Dashboard() {
  const profiles = [
    ['Инженерный', 74, 'green'], ['IT', 67, 'cyan'], ['Агротехнологический', 52, 'orange'], ['Гуманитарный', 46, 'lavender'], ['Творческий', 39, 'yellow'], ['Предпринимательский', 31, 'navy'],
  ] as const
  return <div className="dashboard-shell">
    <div className="dashboard-topbar"><div><span className="status-dot" /> Демонстрационные данные</div><span>Кадровая карта региона <span className="topbar-muted">/ интерфейс концепта</span></span><span className="topbar-live">2026 <CaretDown size={14} /></span></div>
    <div className="dashboard-filters"><span>Территория <b>Нижегородская область</b><CaretDown size={13} /></span><span>Возраст <b>1–11 класс</b><CaretDown size={13} /></span><span>Период <b>2026–2041</b><CaretDown size={13} /></span></div>
    <div className="dashboard-grid">
      <div className="dash-card profile-card"><div className="dash-card-head"><span>Динамика профилей</span><span className="dash-kicker">все группы</span></div>{profiles.map(([label, value, tone]) => <div className="profile-row" key={label}><span>{label}</span><div className="profile-bar"><i className={`bar-${tone}`} style={{ width: `${value}%` }} /></div><b>{value}%</b></div>)}<span className="demo-label">условная визуализация</span></div>
      <div className="dash-card forecast-card"><div className="dash-card-head"><span>Прогноз по территории</span><span className="dash-kicker">до 15 лет</span></div><div className="forecast-value">+18<span>%</span></div><div className="forecast-sub">изменение кадрового потенциала <span>• demo</span></div><div className="chart-lines"><span /><span /><span /><span /></div><svg className="forecast-chart" viewBox="0 0 420 120" preserveAspectRatio="none" aria-label="Демонстрационный график прогнозной динамики"><defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#36b85f" stopOpacity=".22" /><stop offset="1" stopColor="#36b85f" stopOpacity="0" /></linearGradient></defs><path d="M0 98 C42 96 45 76 82 80 S133 93 166 67 S208 74 246 50 S285 56 320 34 S367 42 420 10 L420 120 L0 120Z" fill="url(#chartFill)" /><path d="M0 98 C42 96 45 76 82 80 S133 93 166 67 S208 74 246 50 S285 56 320 34 S367 42 420 10" fill="none" stroke="#36b85f" strokeWidth="3" /></svg><div className="chart-labels"><span>сейчас</span><span>5 лет</span><span>10 лет</span><span>15 лет</span></div></div>
      <div className="dash-card capacity-card"><div className="dash-card-head"><span>Образовательная среда</span><span className="dash-icon"><Target size={18} /></span></div><div className="capacity-ring"><div><strong>68</strong><small>условный индекс</small></div></div><p>Точки роста для кружков, программ и профильных классов.</p><ArrowLink>Смотреть рекомендации</ArrowLink></div>
      <div className="dash-card deficit-card"><div className="dash-card-head"><span>Потенциальный дефицит</span><span className="dash-kicker">сигналы</span></div><div className="deficit-list"><div><span className="signal signal-high" /><b>Инженерные компетенции</b><em>внимание</em></div><div><span className="signal signal-mid" /><b>IT и данные</b><em>наблюдение</em></div><div><span className="signal signal-low" /><b>Агротехнологии</b><em>стабильно</em></div></div><span className="demo-label">модельный пример</span></div>
    </div>
  </div>
}

function App() {
  const [audience, setAudience] = useState(0)
  const ActiveAudienceIcon = audienceData[audience].icon
  return <>
    <Header />
    <main>
      <section id="hero" className="hero section-shell">
        <div className="hero-copy">
          <span className="eyebrow">Платформа ранней диагностики и кадрового прогнозирования</span>
          <h1>Увидеть кадровое будущее региона <span>сегодня</span></h1>
          <p className="hero-lead">ИИ-Навигатор «Моё Будущее» анализирует развитие склонностей школьников в динамике и превращает агрегированные данные в долгосрочный кадровый прогноз для региона, образования и бизнеса.</p>
          <div className="story-line"><span>Ребёнок</span><ArrowRight size={17} /><span>образование</span><ArrowRight size={17} /><span>профессия</span><ArrowRight size={17} /><span>территория</span></div>
          <div className="hero-actions"><Button href="#contact">Обсудить пилот <ArrowRight size={17} weight="bold" /></Button><Button variant="secondary" onClick={() => scrollToId('how-it-works')}>Как работает система <ArrowDown size={17} weight="bold" /></Button></div>
          <div className="metric-row"><div><strong>до 15 лет</strong><span>горизонт планирования</span></div><div><strong>3 месяца</strong><span>пилотный запуск</span></div><div><strong>1–11 класс</strong><span>непрерывная диагностика</span></div></div>
        </div>
        <HeroVisual />
      </section>

      <section id="about" className="problem section-shell section-padding">
        <span id="problem" className="anchor-target" />
        <div className="problem-heading"><SectionHeading eyebrow="Проблема" title="Сегодня регионы узнают о кадровом дефиците слишком поздно" lead="Образование, кадровая политика и экономика территории часто работают на разных горизонтах. Школа видит текущий процесс, предприятие — текущие вакансии, а регион вынужден реагировать, когда дефицит уже сформировался." /><div className="formula formula-red">Нет данных <ArrowRight size={16} /> нет прогноза <ArrowRight size={16} /> усиливается отток</div></div>
        <div className="problem-grid"><div className="problem-visual"><img src={`${A}image 959.png`} alt="Ребёнок на развилке с указателями" /><div className="visual-note"><Compass size={19} /> Навигация начинается до выбора профессии</div></div><div className="problem-cards"><InfoCard icon={GraduationCap} tone="lavender" title="Образование" text="Не видит долгосрочную структуру склонностей поколения. Разовые тесты и отдельные активности не формируют единой картины изменений." /><InfoCard icon={Briefcase} tone="orange" title="Экономика" text="Не знает, какие специалисты будут доступны территории через годы. Кадровые программы строятся с высокой долей неопределённости." /><InfoCard icon={Buildings} tone="cyan" title="Регион" text="Реагирует на кадровые проблемы вместо того, чтобы предупреждать их — инфраструктура появляется после разрыва." /></div></div>
        <Accordion title="Почему это системная проблема"><ul className="plain-list"><li>Разовые профориентационные тесты не создают динамику.</li><li>Муниципалитет не видит формирующийся кадровый потенциал.</li><li>Предприятия не имеют долгосрочного прогноза.</li><li>ВУЗы и СПО не видят структуру будущего набора.</li><li>Отток молодёжи становится заметен уже постфактум.</li></ul></Accordion>
      </section>

      <section id="solution" className="solution section-shell section-padding section-tint"><SectionHeading eyebrow="Решение" title="Из разрозненных сигналов — в карту будущего региона" lead="ИИ-Навигатор формирует непрерывную картину развития склонностей поколений школьников. Система объединяет диагностику, динамику и образовательные сигналы, чтобы сформировать агрегированный прогноз по территориям и профессиональным направлениям." /><div className="highlight-strip"><Sparkle size={20} weight="fill" /> Сначала выявляем <ArrowRight size={18} /> затем настраиваем образовательную среду и кадровые программы</div><div className="solution-layout"><div className="solution-statement"><span className="giant-number">01</span><h3>Смотреть на поколение в динамике, а не на один ответ</h3><p>Короткие игровые сценарии становятся серией измерений. Важен не ярлык для конкретного ребёнка, а устойчивые групповые тенденции, которые помогают территории принимать решения.</p><ArrowLink onClick={() => scrollToId('how-it-works')}>Посмотреть механику</ArrowLink></div><div className="solution-visual"><img src={`${A}7b78744d-e9db-411c-907d-fe3e1c87b1b0 2.png`} alt="Ребёнок открывает сундук с направлениями развития" /><div className="solution-orbit-label"><span /> Возможности становятся видимыми</div></div></div></section>

      <section id="audiences" className="audiences section-shell section-padding"><SectionHeading eyebrow="Для кого" title="Одна система — разные управленческие решения" lead="Каждый уровень получает только тот тип аналитики, который нужен для его задач." /><div className="audience-tabs" role="tablist" aria-label="Уровни ценности системы">{audienceData.map((item, i) => { const AudienceIcon = item.icon; return <button key={item.label} role="tab" aria-selected={audience === i} className={audience === i ? 'active' : ''} onClick={() => setAudience(i)}><AudienceIcon size={20} weight="duotone" /><span>{item.label}</span></button> })}</div><div className="audience-panel"><div className="audience-panel-copy"><span className="panel-index">0{audience + 1}</span><h3>{audienceData[audience].title}</h3><ul className="check-list">{audienceData[audience].items.map(item => <li key={item}><Check size={17} weight="bold" /> {item}</li>)}</ul></div><div className="audience-panel-visual"><img className="audience-illustration" src={`${A}audience-policy.png`} alt="Визуальная модель данных для управления кадровой политикой" /><div className="audience-visual-badge"><ActiveAudienceIcon size={19} weight="duotone" /> <span>Агрегированная аналитика</span></div><p>Общий аналитический контекст<br /><strong>без доступа к персональным данным</strong></p></div></div></section>

      <section id="how-it-works" className="how section-shell section-padding section-tint"><SectionHeading eyebrow="Механика" title="От короткого опроса — до кадрового прогноза территории" lead="Шесть последовательных шагов превращают простые сигналы в основание для решений." /><div className="steps-grid">{steps.map(([num, title, text, Icon]) => <div className="step-card" key={num}><div className="step-top"><span>{num}</span><Icon size={23} weight="duotone" /></div><h3>{title}</h3><p>{text}</p></div>)}</div><Accordion title="Интеграции по этапам"><div className="integration-list"><div><span>Ядро</span><p>Собственные данные платформы и повторные диагностические срезы.</p></div><div><span>По мере развития</span><p>Образовательные платформы и данные дополнительного образования — при наличии разрешений.</p></div><div><span>Следующий контур</span><p>ВУЗы, СПО, предприятия и государственные программы на уровне агрегированных прогнозов.</p></div><div><span>Перспектива</span><p>Симуляция профессий и дополнительные механики образовательной среды.</p></div></div></Accordion></section>

      <section id="privacy" className="privacy section-shell section-padding"><div className="privacy-header"><SectionHeading eyebrow="Принцип работы с данными" title="Понимаем группу. Не отслеживаем ребёнка." lead="Для государства, бизнеса и партнёров ценность представляет структура и динамика групп, а не персональная информация конкретного школьника." /><div className="privacy-quote"><ShieldCheck size={28} weight="duotone" /><p>Региону важно понимать, сколько потенциальных инженеров формируется на территории — а не кто конкретно из детей станет инженером.</p></div></div><div className="privacy-grid"><div className="privacy-card state"><div className="privacy-card-head"><span>Контур 01</span><IconBadge icon={Buildings} tone="cyan" /></div><h3>Государственный</h3><ul className="plain-list"><li>работа в рамках применимого законодательства;</li><li>идентифицированные данные — только там, где это необходимо и разрешено;</li><li>согласия и регламентированный доступ;</li><li>государственные и региональные сценарии.</li></ul></div><div className="privacy-card commercial"><div className="privacy-card-head"><span>Контур 02</span><IconBadge icon={ChartLineUp} tone="green" /></div><h3>Коммерческий</h3><ul className="plain-list"><li>только анонимизированные агрегаты;</li><li>бизнес не получает доступ к конкретному ребёнку;</li><li>предприятия и ВУЗы получают прогноз и аналитику;</li><li>персональные данные не являются продуктом.</li></ul></div></div><div className="red-line"><div><WarningCircle size={23} weight="duotone" /><strong>Красная линия</strong></div><span>Данные детей не продаются</span><span>Нет доступа к конкретным детям</span><span>Нет публичных рейтингов и сравнений</span></div></section>

      <section id="dashboard" className="dashboard section-shell section-padding section-dark"><div className="dashboard-heading"><SectionHeading eyebrow="Гос-панель" title="Из тысяч отдельных сигналов — одна управленческая картина" lead="Вместо набора разрозненных тестов регион получает динамическую модель кадрового потенциала территории." /><div className="dashboard-side-note"><Database size={19} /> Все значения ниже — демонстрационные</div></div><Dashboard /></section>

      <section id="pilot" className="pilot section-shell section-padding"><SectionHeading eyebrow="Первый этап" title="Проверить модель можно за 3 месяца" lead="Пилот позволяет проверить подход на ограниченной территории без масштабного внедрения системы." /><div className="pilot-grid"><div className="pilot-card need"><div className="card-label">Что нужно</div><h3>Минимальные условия</h3><ul className="big-list"><li><MapPin size={20} /> 1 муниципалитет</li><li><Buildings size={20} /> 1–3 образовательные организации</li><li><ShieldCheck size={20} /> необходимые согласия и разрешения</li><li><Database size={20} /> доступ к разрешённым обезличенным данным</li><li><UsersThree size={20} /> контактное лицо со стороны администрации</li></ul></div><div className="pilot-card team-work"><div className="card-label">Что делает команда</div><h3>Собирает первичную модель</h3><ul className="big-list"><li><ListChecks size={20} /> запускает серию диагностических сценариев</li><li><ChartLineUp size={20} /> агрегирует и обрабатывает результаты</li><li><Database size={20} /> сопоставляет их с данными территории</li><li><Target size={20} /> готовит рекомендации для следующего этапа</li></ul></div></div><div className="result-grid">{[['Кадровый прогноз', 'первичная модель на горизонте до 15 лет.', TrendUp], ['Модель подготовки', 'направления развития специалистов и образовательных программ.', GraduationCap], ['Инструменты для региона и бизнеса', 'структура будущей аналитики.', ChartLineUp], ['Рекомендации по инфраструктуре', 'точки, которые имеет смысл проверять и развивать.', MapPin]].map(([title, text, Icon]) => <div className="result-card" key={title as string}><IconBadge icon={Icon as IconType} tone="green" /><h3>{title as string}</h3><p>{text as string}</p></div>)}</div><div className="pilot-bottom"><strong>Решения на цифрах, а не на ощущениях.</strong><Button href="#contact">Обсудить пилот <ArrowRight size={17} weight="bold" /></Button></div></section>

      <section id="roadmap" className="roadmap section-shell section-padding section-tint"><SectionHeading eyebrow="Масштабирование" title="От пилота — к региональной кадровой системе" lead="Последовательное развитие от ограниченной проверки гипотез к связке школа → СПО/ВУЗ → работодатель." /><div className="roadmap-line">{roadmap.map(([stage, title, text, date], i) => <div className="roadmap-item" key={stage}><div className="roadmap-marker"><span>{i + 1}</span></div><div className="roadmap-date">{date}</div><span className="eyebrow">{stage}</span><h3>{title}</h3><p>{text}</p></div>)}</div></section>

      <section id="impact" className="impact section-shell section-padding"><div className="section-heading-visual"><SectionHeading eyebrow="Эффект" title="Не ещё одна образовательная платформа, а слой данных между образованием и экономикой" lead="Система создаёт связку между склонностями поколения, образовательными возможностями и кадрами, которые понадобятся территории." /><div className="section-art impact-art"><img src={`${A}impact-data-layer.png`} alt="Слой данных, соединяющий образование и экономику" /></div></div><div className="impact-grid">{[['Кадровый дефицит', 'Раннее обнаружение потенциальных разрывов по направлениям.', 'down', Target], ['Отток', 'Возможность создавать среду вокруг реально формирующихся интересов.', 'down', MapPin], ['Эффективность образования', 'Кружки, программы и инфраструктура получают понятную основу.', 'up', GraduationCap], ['Предсказуемость инвестиций', 'Предприятия учитывают кадровый горизонт в долгосрочных программах.', 'up', ChartLineUp], ['Управляемость', 'Результаты решений можно наблюдать в динамике поколений.', 'up', TrendUp], ['Связность системы', 'Школа, СПО/ВУЗ, предприятие и регион получают общий контекст.', 'up', Handshake]].map(([title, text, direction, Icon]) => <div className="impact-card" key={title as string}><div className={`impact-icon ${direction as string}`}><Icon size={22} weight="duotone" /><span>{direction === 'up' ? '↑' : '↓'}</span></div><h3>{title as string}</h3><p>{text as string}</p></div>)}</div><p className="hypothesis-note"><WarningCircle size={17} /> Количественные экономические эффекты являются гипотезами проекта и должны подтверждаться по результатам пилота.</p></section>

      <section id="model" className="model section-shell section-padding section-tint"><div className="section-heading-visual"><SectionHeading eyebrow="Модель" title="Государственная инфраструктура + коммерческие аналитические сервисы" lead="Архитектура проекта разделяет работу с государственными данными и коммерческие продукты на уровне принципа." /><div className="section-art model-art"><img src={`${A}model-contours.png`} alt="Два соединённых контура государственной инфраструктуры и коммерческих сервисов" /></div></div><div className="model-grid"><div className="model-card state-model"><div className="model-number">01</div><h3>Государственный контур</h3><p>Развитие платформы и внедрение в образовательной среде.</p><ul className="check-list"><li><Check size={17} weight="bold" /> региональные программы</li><li><Check size={17} weight="bold" /> государственные субсидии</li><li><Check size={17} weight="bold" /> грантовая поддержка</li><li><Check size={17} weight="bold" /> национальные проекты</li></ul></div><div className="model-card commercial-model"><div className="model-number">02</div><h3>Коммерческий контур</h3><p>Аналитические продукты вокруг агрегированного прогноза.</p><ul className="check-list"><li><Check size={17} weight="bold" /> B2B-подписка предприятий</li><li><Check size={17} weight="bold" /> продукты для ВУЗов и СПО</li><li><Check size={17} weight="bold" /> отраслевые прогнозы</li><li><Check size={17} weight="bold" /> партнёрские программы</li></ul></div></div><div className="model-statement"><LockKey size={23} weight="duotone" /><strong>Монетизируются аналитика и сервисы.<br />Персональные данные детей — нет.</strong></div><Accordion title="Подробнее о двухконтурной модели"><p>Государственная часть работает с данными и сценариями, для которых есть законное основание и согласия. Коммерческий контур получает только обезличенную агрегированную аналитику и не становится каналом доступа к конкретному ребёнку.</p></Accordion></section>

      <section id="progress" className="progress section-shell section-padding"><SectionHeading eyebrow="Текущий статус" title="Проект уже вышел за рамки идеи" lead="Команда собрала основу для перехода к ограниченному пилоту и проверке модели на реальных данных." /><div className="progress-grid">{[['Апробация', 'Проведена апробация на базе школы и центра дополнительного образования в Нижнем Новгороде.', Check], ['Архитектура', 'Проработана архитектура информационной системы.', Cpu], ['Техническая база', 'Создана базовая техническая основа проекта.', Database], ['Методика', 'Проведён анализ контента тестов и интерактивов.', Compass], ['Экспертиза', 'Ведётся обсуждение подхода с психологами и педагогами.', UsersThree], ['Пилот', 'Идут переговоры о запуске проекта на территории.', Handshake]].map(([title, text, Icon]) => <div className="progress-item" key={title as string}><IconBadge icon={Icon as IconType} tone="green" /><div><h3>{title as string}</h3><p>{text as string}</p></div></div>)}</div></section>

      <section id="partnership" className="partnership section-shell section-padding section-tint"><div className="section-heading-visual"><SectionHeading eyebrow="Партнёрство" title="Следующий шаг — региональный пилот и проверка модели на реальных данных" lead="Проекту нужны партнёры, с которыми можно пройти путь от ограниченной проверки до рабочей региональной модели." /><div className="section-art partnership-art"><img src={`${A}partnership-pilot.png`} alt="Региональный пилот как совместная работа региона, школы и бизнеса" /></div></div><div className="partner-grid">{[['Региональный партнёр', 'Муниципалитет или регион, готовый стать площадкой для пилота.', MapPin], ['Интеграционная поддержка', 'Организация доступа к разрешённым образовательным источникам и процессам.', Handshake], ['Экспертиза', 'Методисты, педагоги, психологи, отраслевые и кадровые специалисты.', UsersThree], ['Инвестиции и развитие', 'Ресурсы для развития платформы, аналитического ядра и масштабирования.', Lightning]].map(([title, text, Icon]) => <div className="partner-card" key={title as string}><IconBadge icon={Icon as IconType} tone="green" /><h3>{title as string}</h3><p>{text as string}</p></div>)}</div><div className="partnership-cta"><p>Будущее кадров можно не угадывать. Его можно увидеть заранее.</p><Button href="#contact">Стать партнёром проекта <ArrowRight size={17} weight="bold" /></Button></div></section>

      <section id="team" className="team-section section-shell section-padding"><SectionHeading eyebrow="Команда" title="Образование, технологии, дизайн и внедрение" lead="Три компетенции, которые соединяют идею с реальным пилотом." /><div className="team-grid">{team.map((person, i) => <div className="team-card" key={person.name}><div className={`team-photo photo-${i + 1}`}><span>{person.name.split(' ').map(n => n[0]).join('')}</span></div><div className="team-content"><span className="team-role">{person.role}</span><h3>{person.name}</h3><p>{person.short}</p><a className="team-contact" href={`https://t.me/${person.contact.slice(1)}`} target="_blank" rel="noreferrer">{person.contact} <ArrowUpRight size={15} /></a><Accordion title="Подробнее"><p>{person.name === 'Михаил Вялов' ? 'Основатель и управляющий директор «Сокол ПРО» — интегратора образовательных решений для школ, лабораторий, агротехклассов и инженерных пространств. Специализируется на комплексном оснащении бюджетных учреждений.' : person.name === 'Михаил Юматов' ? 'Директор и учредитель Digital-агентства USIT. Работает с оптимизацией бизнес-процессов, архитектурой сложных информационных систем и облачными решениями. Курирует инженерные компетенции и региональные мероприятия.' : 'Основатель студии дизайна и разработки сложных цифровых продуктов TOLK. UI/UX и Design Director, организатор крупных офлайн- и онлайн-проектов, вице-президент Ассоциации самозанятых России.'}</p></Accordion></div></div>)}</div></section>

      <section id="faq" className="faq section-shell section-padding section-tint"><SectionHeading eyebrow="Подробнее о проекте" title="Вопросы, которые возникают на старте" /><div className="faq-grid"><div>{[['Какие данные анализирует система?', 'Короткие адаптивные опросы и игровые сценарии; по мере развития — дополнительные образовательные сигналы и интеграции. Внешняя аналитика строится на агрегированных данных.'], ['Почему недостаточно одного теста?', 'Проект строится вокруг динамики. Повторные срезы позволяют видеть изменение интересов во времени, а не опираться на единичный ответ.'], ['Кто видит данные конкретного ребёнка?', 'Внешние институциональные участники не должны получать доступ к индивидуальной информации ребёнка. Для региона и бизнеса ценность строится на агрегированной аналитике.'], ['Что получает регион?', 'Карту тенденций по территории, кадровый прогноз, динамику профилей и основу для планирования образовательной и кадровой инфраструктуры.']].map(([title, text]) => <Accordion key={title} title={title}>{text}</Accordion>)}</div><div>{[['Как проходит пилот?', 'Ограниченная территория, несколько образовательных организаций, серия диагностик, агрегация результатов, аналитика и подготовка первичной модели.'], ['Какие интеграции предусмотрены?', 'Поэтапное подключение образовательных платформ, данных дополнительного образования, ВУЗов, СПО, предприятий и государственных программ.'], ['Как проект зарабатывает?', 'Государственная часть может развиваться через бюджетные, грантовые и проектные механизмы. Коммерческий контур — через аналитические сервисы и подписки на агрегированные прогнозы.'], ['Что является главным риском?', 'Внедрение в образовательные организации требует административной поддержки, понятного процесса и минимальной дополнительной нагрузки на школы.']].map(([title, text]) => <Accordion key={title} title={title}>{text}</Accordion>)}</div></div></section>

      <section id="contact" className="contact section-shell section-padding"><div className="contact-glow" /><div className="contact-inner"><span className="eyebrow">Следующий шаг</span><h2>Будущее кадров можно не угадывать.<br /><span>Его можно увидеть заранее.</span></h2><p>Начнём с пилота, проверим модель на реальных данных и сформируем основу для масштабирования.</p><div className="contact-actions"><Button href="#contact">Обсудить пилот <ArrowRight size={17} weight="bold" /></Button><Button variant="secondary" href="#partnership">Стать партнёром</Button></div><div className="contact-people"><span>Команда проекта «Моё Будущее»</span><div><a href="https://t.me/omtatsat0" target="_blank" rel="noreferrer">Михаил Вялов</a><a href="https://t.me/mixayumatov" target="_blank" rel="noreferrer">Михаил Юматов</a><a href="https://t.me/gevget" target="_blank" rel="noreferrer">Евгений Толченков</a></div></div></div></section>
    </main>
    <footer className="footer"><div className="footer-inner"><a className="brand" href="#hero"><img src={`${A}logo.png`} alt="Моё Будущее" /></a><span>Моё Будущее / ИИ-Навигатор</span><nav>{navItems.slice(0, 4).map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav><small>Презентационный сайт проекта · 2026</small></div><a className="made-by-bar" href="https://tolk-usite.com" target="_blank" rel="noreferrer">Сделано с Tolk + USite</a></footer>
  </>
}

function InfoCard({ icon, tone, title, text }: { icon: IconType; tone: 'green' | 'cyan' | 'orange' | 'lavender'; title: string; text: string }) {
  return <div className="info-card"><IconBadge icon={icon} tone={tone} /><h3>{title}</h3><p>{text}</p></div>
}

export default App
