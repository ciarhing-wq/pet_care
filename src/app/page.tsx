import Image from "next/image";
import { BookingForm } from "@/components/BookingForm";

const services = [
  {
    icon: "洗",
    title: "基础洗护",
    copy: "温和沐浴、耳道清洁、指甲修剪、脚底毛修整、肛门腺护理。",
  },
  {
    icon: "剪",
    title: "美容造型",
    copy: "犬猫局部修剪、全身造型、脸型调整，保留品种特点与日常好打理度。",
  },
  {
    icon: "梳",
    title: "除结梳毛",
    copy: "针对换毛季、浮毛厚重和轻中度打结，分层梳理，减少硬拽不适。",
  },
  {
    icon: "护",
    title: "皮毛护理",
    copy: "保湿浴、蓬松护理、敏感肌低刺激方案，帮助毛发恢复柔顺光泽。",
  },
];

const prices = [
  {
    title: "轻洁套餐",
    price: "¥88",
    featured: false,
    items: ["适合短毛小型犬猫", "沐浴吹干与基础清洁", "脚底毛与指甲修整"],
  },
  {
    title: "全护套餐",
    price: "¥168",
    featured: true,
    items: ["适合日常完整洗护", "深层清洁与蓬松护理", "皮肤状态记录与反馈"],
  },
  {
    title: "造型套餐",
    price: "¥268",
    featured: false,
    items: ["适合修毛与造型需求", "全身修剪与脸型调整", "护理师一对一沟通方案"],
  },
];

const reviews = [
  {
    rating: 5,
    copy: "我家狗狗很怕吹风，护理师会分段安抚，结束后还发了耳朵和皮肤状态照片。",
    author: "金毛家长 陈女士",
  },
  {
    rating: 5,
    copy: "猫咪第一次来没有炸毛，洗完蓬松很多。店里味道很清爽，工具也看着很干净。",
    author: "英短家长 Leo",
  },
  {
    rating: 4,
    copy: "价格提前说清楚，不会临时加项目。打结处理得很细，回家梳毛轻松多了。",
    author: "比熊家长 小许",
  },
  {
    rating: 5,
    copy: "预约时间卡得很准，到店不用久等。洗完香味不冲，抱回家毛摸起来特别顺。",
    author: "柴犬家长 阿宁",
  },
  {
    rating: 5,
    copy: "护理师会先问过敏史和脾气，修脚毛也很耐心。胆小狗这次全程都比较稳定。",
    author: "柯基家长 周先生",
  },
  {
    rating: 5,
    copy: "长毛猫梳结最怕硬扯，这次处理得很温柔，还教了家里每天怎么分层梳。",
    author: "布偶家长 米粒",
  },
  {
    rating: 4,
    copy: "烘干区是独立的，声音没想象中吓人。结束后护理记录写得清楚，值得回购。",
    author: "雪纳瑞家长 王小姐",
  },
  {
    rating: 5,
    copy: "老年犬腿脚不太好，店员会扶着洗，休息间隔也安排得很好，家里人很放心。",
    author: "泰迪家长 林阿姨",
  },
];

export default function Home() {
  return (
    <>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="爪爪沐光首页">
          <span className="brand-mark" aria-hidden="true" />
          <span>爪爪沐光</span>
        </a>
        <nav className="nav" aria-label="主导航">
          <a href="#services">洗护项目</a>
          <a href="#process">护理流程</a>
          <a href="#pricing">套餐价格</a>
          <a href="#booking">门店预约</a>
        </nav>
        <a className="nav-cta" href="#booking">
          立即预约
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-label="爪爪沐光宠物洗护店">
          <div className="hero-inner">
            <p className="eyebrow">犬猫洗护 · 美容造型 · SPA护理</p>
            <h1>爪爪沐光宠物洗护店</h1>
            <p className="hero-copy">
              用可视化护理流程、独立烘干区和一宠一巾标准，让每只小伙伴都能舒服、干净、香香地回家。
            </p>
            <div className="hero-actions">
              <a className="button" href="#booking">
                预约洗护
              </a>
              <a className="button secondary" href="#pricing">
                查看套餐
              </a>
            </div>
            <div className="hero-strip" aria-label="门店亮点">
              <div className="hero-stat">
                <strong>45-90分钟</strong>
                <span>常规洗护参考时长</span>
              </div>
              <div className="hero-stat">
                <strong>一宠一消毒</strong>
                <span>浴池、工具与毛巾独立清洁</span>
              </div>
              <div className="hero-stat">
                <strong>透明护理</strong>
                <span>接宠、洗护、吹干全程反馈</span>
              </div>
            </div>
          </div>
        </section>

        <section className="services" id="services">
          <div className="section-inner">
            <div className="section-head">
              <h2>从基础清洁到造型护理，一次安排清楚。</h2>
              <p>
                根据毛量、皮肤状态和性格选择护理节奏，减少应激，洗得干净也洗得安心。
              </p>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="visual-band" id="process">
          <div className="environment-carousel" aria-label="宠物洗护店内环境轮播图">
            <figure className="carousel-slide">
              <Image
                src="/assets/store-reception.png"
                alt="中国高端宠物洗护店接待等候区"
                fill
                sizes="(max-width: 920px) 100vw, 52vw"
                priority
              />
            </figure>
            <figure className="carousel-slide">
              <Image
                src="/assets/store-bathing.png"
                alt="中国高端宠物洗护店洗护SPA区"
                fill
                sizes="(max-width: 920px) 100vw, 52vw"
                loading="eager"
              />
            </figure>
            <figure className="carousel-slide">
              <Image
                src="/assets/store-grooming.png"
                alt="中国高端宠物洗护店造型烘干区"
                fill
                sizes="(max-width: 920px) 100vw, 52vw"
                loading="eager"
              />
            </figure>
            <div className="carousel-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className="process">
            <h2 className="section-kicker process-kicker">护理流程</h2>
            <h2>每一步都看得见，毛孩子更放松。</h2>
            <ul className="process-list">
              <li>
                <span className="step-num">1</span>
                <span>
                  <strong>入店检查</strong>
                  <span>确认皮肤、耳朵、毛结、指甲状态，记录特殊习惯。</span>
                </span>
              </li>
              <li>
                <span className="step-num">2</span>
                <span>
                  <strong>分区洗护</strong>
                  <span>先梳通再沐浴，按犬猫体型和毛质调整水温与手法。</span>
                </span>
              </li>
              <li>
                <span className="step-num">3</span>
                <span>
                  <strong>低压吹干</strong>
                  <span>独立烘干与人工吹风结合，降低噪声刺激和等待焦虑。</span>
                </span>
              </li>
              <li>
                <span className="step-num">4</span>
                <span>
                  <strong>出店反馈</strong>
                  <span>同步护理记录、皮肤提示和居家梳毛建议。</span>
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="pricing" id="pricing">
          <div className="section-inner">
            <div className="section-head">
              <h2>清洗套餐，按体型与毛量微调。</h2>
              <p>以下为门店参考价，长毛、严重打结、特殊护理会在服务前确认。</p>
            </div>
            <div className="price-grid">
              {prices.map((plan) => (
                <article
                  className={`price-card${plan.featured ? " featured" : ""}`}
                  key={plan.title}
                >
                  <h3>{plan.title}</h3>
                  <div className="price">
                    {plan.price} <small>起</small>
                  </div>
                  <ul>
                    {plan.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="reviews">
          <div className="section-inner">
            <div className="section-head">
              <h2>老客人喜欢这里的原因。</h2>
              <p>洗得干净只是基础，更重要的是照顾宠物的情绪和主人的放心感。</p>
            </div>
            <div className="review-carousel" aria-label="客户评价轮播">
              <div className="review-track">
                {reviews.map((review) => (
                  <article className="review" key={review.author}>
                    <div
                      className="stars"
                      aria-label={`${review.rating} 星评价`}
                    >
                      <span aria-hidden="true">
                        {"★".repeat(review.rating)}
                        <span className="stars-muted">
                          {"☆".repeat(5 - review.rating)}
                        </span>
                      </span>
                    </div>
                    <p>{review.copy}</p>
                    <strong>{review.author}</strong>
                  </article>
                ))}
                {reviews.map((review) => (
                  <article
                    className="review"
                    key={`${review.author}-loop`}
                    aria-hidden="true"
                  >
                    <div className="stars">
                      <span aria-hidden="true">
                        {"★".repeat(review.rating)}
                        <span className="stars-muted">
                          {"☆".repeat(5 - review.rating)}
                        </span>
                      </span>
                    </div>
                    <p>{review.copy}</p>
                    <strong>{review.author}</strong>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="booking" id="booking">
          <div className="section-inner booking-layout">
            <div>
              <h2 className="section-kicker booking-kicker">门店预约</h2>
              <h2>提前预约，到店少等待。</h2>
              <p>
                营业时间 10:00-20:00。周末和节假日前建议提前 1-2
                天预约，特殊犬猫请备注性格和健康情况。
              </p>
              <div className="contact-list">
                <span>
                  <strong>地址：</strong>上海市宜川路街道陕西北路 1620 号
                </span>
                <span>
                  <strong>电话：</strong>021-8888-6626
                </span>
                <span>
                  <strong>微信：</strong>zhaozhao-petcare
                </span>
              </div>
              <figure className="store-map" aria-label="爪爪沐光门店位置示意地图">
                <Image
                  src="/assets/store-location-map-ai.png"
                  alt="可爱清醒风格的宠物店手绘地图，标记陕西北路1620号门店"
                  width={1568}
                  height={1003}
                  sizes="(max-width: 920px) 100vw, 46vw"
                  loading="eager"
                />
                <div className="map-overlay" aria-hidden="true">
                  <strong>爪爪沐光 · 1620</strong>
                  <span>陕西北路 1620 号</span>
                </div>
                <figcaption className="map-caption">
                  <span>
                    <strong>到店位置</strong>
                    宜川路街道，陕西北路 1620 号，按地图标记到店即可。
                  </span>
                  <span className="map-badge" aria-hidden="true" />
                </figcaption>
              </figure>
            </div>
            <BookingForm />
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <span>© 2026 爪爪沐光宠物洗护店</span>
          <span>温柔洗护，干净回家。</span>
        </div>
      </footer>
    </>
  );
}
