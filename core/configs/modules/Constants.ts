import { nuxtContext } from '@nuxt/types'
import { Question } from '@/types/index.ts'
import { filename } from 'pathe/utils'

export default (context: nuxtContext) => {
  const iconGlobal = import.meta.glob('@img/icon/*', { eager: true })
  const icons = Object.fromEntries(Object.entries(iconGlobal).map(([key, value]) => [filename(key), value.default]))

  const productsGlobal = import.meta.glob('@img/products/*', { eager: true })
  const products = Object.fromEntries(
    Object.entries(productsGlobal).map(([key, value]) => [filename(key), value.default])
  )

  const constants = {
    questionsName: [
      Question.QuestionType.USAGE,
      Question.QuestionType.GAMES,
      Question.QuestionType.TYPING,
      Question.QuestionType.NOISE,
      Question.QuestionType.DESIGN
    ],
    questions: [
      {
        id: 'usage',
        question: 'Как вы в основном используете клавиатуру?',
        next: 'games',
        answerList: [
          {
            id: 'a',
            answer: 'Для игр'
          },
          {
            id: 'b',
            answer: 'Для работы и набора текста'
          },
          {
            id: 'c',
            answer: 'Для всего понемногу'
          }
        ]
      },
      {
        id: 'games',
        next: 'typing',
        question: 'В какие игры вы чаще всего играете?',
        answerList: [
          {
            id: 'a',
            answer: 'Быстрые шутеры и экшен-игры<br />(Побег из Таркова, Call of Duty, Apex Legends)'
          },
          {
            id: 'b',
            answer: 'Стратегии и RPG<br />(Civilization, The Witcher)'
          },
          {
            id: 'c',
            answer: 'Песочницы и креативные игры<br />(Minecraft, Terraria, The Sims)',
            icon: icons['pickaxe-icon']
          }
        ]
      },
      {
        id: 'typing',
        next: 'noise',
        question: 'Как бы вы описали ваши идеальные нажатия на клавиши?',
        answerList: [
          {
            id: 'a',
            answer: 'Как будто нажимаю на облачко'
          },
          {
            id: 'b',
            answer: 'Как будто получаю маленькую победу с каждым нажатием'
          },
          {
            id: 'c',
            answer: 'Как будто клацаю кастаньетами'
          }
        ]
      },
      {
        id: 'noise',
        next: 'design',
        question: 'Какой уровень шума вам комфортен?',
        answerList: [
          {
            id: 'a',
            answer: 'Минимальный шум<br />(тихая клавиатура, чтоб не разбудить бабушку)'
          },
          {
            id: 'b',
            answer: 'Средний уровень шума<br />(клавиатура, чтобы не привлекать слишком много внимания)'
          },
          {
            id: 'c',
            answer: 'Мне неважно, даже если клавиатура шумная<br />(пусть все знают, что я работаю/играю)'
          }
        ]
      },
      {
        id: 'design',
        next: 'result',
        question: 'Что для вас важно в дизайне клавиатуры?',
        answerList: [
          {
            id: 'a',
            answer: 'Мне нравится строгий, минималистичный дизайн<br />без лишних деталей'
          },
          {
            id: 'b',
            answer: 'Главное - эргономичность и комфорт при долгой работе'
          },
          {
            id: 'c',
            answer: 'Мне просто нравится как выглядят механические<br />клавиатуры и кастомные свитчи'
          }
        ]
      }
    ],
    result: {
      a: {
        subtitle: 'Linear switches',
        text: 'Вам подойдут Linear switches (например, Cherry MX Red). Они обеспечивают легкое и гладкое нажатие с минимальным уровнем шума, что делает их идеальными для игр, особенно быстрых шутеров и экшен-игр. Подходит для минималистов и тех, кто ценит современные технологии.'
      },
      b: {
        subtitle: 'Tactile switches',
        text: 'Вам подойдут Tactile switches (например, Cherry MX Brown). Эти свитчи дают четкую обратную связь при нажатии и имеют средний уровень шума, что удобно для работы, набора текста, а также для стратегий и RPG. Подходит для ценителей классики и традиционных решений.'
      },
      c: {
        subtitle: 'Clicky switches',
        text: 'Вам подойдут Clicky switches (например, Cherry MX Blue). Они обеспечивают щелчок при нажатии и подходят для тех, кто любит отчетливую обратную связь и не против шума, что делает их универсальными для различных задач и игр. Подходит для креативных личностей и любителей ярких, нестандартных решений.'
      }
    },
    products: {
      a: [
        {
          name: 'Royal Kludge RK61',
          shops: [
            {
              link: 'https://aliexpress.ru/item/1005004587987048.html?sku_id=12000033855450639&spm=a2g2w.stores.seller_list.12.7691349a3vt8vw',
              name: 'aliexpress'
            }
          ],
          image: products['S4322f0bc61b34-bddb97283b1dd065e0aM'],
          price: '$35'
        },
        {
          name: 'Royal Kludge RK71',
          shops: [
            {
              link: 'https://aliexpress.ru/item/1005003985082785.html?sku_id=12000037582695685&spm=a2g2w.stores.seller_list.9.7691349a3vt8vw',
              name: 'aliexpress'
            }
          ],
          image: products['Scd63f3b-3f62e447ebe9-5f20b78589971S'],
          price: '$50'
        },
        {
          name: 'Ducky One 3 TKL Pure White',
          shops: [
            {
              link: 'https://mechanicalkeyboards.com/products/ducky-one-3-tkl-pure-white?variant=47616271221036',
              name: 'mechanicalkeyboards'
            }
          ],
          image: products['107_One-3-TKL-Pure-White'],
          price: '$119'
        },
        {
          name: 'Varmilo VA Series V2 Dreams on Board',
          shops: [
            {
              link: 'https://mechanicalkeyboards.com/products/varmilo-vea108-dreams-on-board',
              name: 'mechanicalkeyboards'
            }
          ],
          image: products['8246_63ae01d9c5301_VEA108-Dreams-on-Board'],
          price: '$150'
        },
        {
          name: 'Leopold FC750RBT V2 Coral/Blue',
          shops: [
            {
              link: 'https://mechanicalkeyboards.com/products/leopold-fc750rbt-v2-coral-blue-bluetooth?variant=48684769083692',
              name: 'mechanicalkeyboards'
            },
            {
              link: 'https://geekboards.ru/product/leopold-fc750r-bt-coral-blue',
              name: 'Geekboards'
            }
          ],
          image: products['18817-N84ZP-Leopold-FC750RBT-V2-Coral-Blue-with-MX2A-Switches'],
          price: '$129'
        },
        {
          name: 'Varmilo Minilo VXT67 Eucalyptus',
          shops: [
            {
              link: 'https://mechanicalkeyboards.com/products/varmilo-minilo-vxt67-eucalyptus?variant=47607997366572',
              name: 'mechanicalkeyboards'
            }
          ],
          image: products['14711_636ac87724028_Minilo-VXT67-Eucalyptus'],
          price: '$119'
        },
        {
          name: 'Varmilo VPE87 CMYK TKL',
          shops: [
            {
              link: 'https://mechanicalkeyboards.com/products/varmilo-vpe87-cmyk?variant=47997022765356',
              name: 'mechanicalkeyboards'
            }
          ],
          image: products['17366-B9U92-VPE87-CMYK'],
          price: '$124'
        },
        {
          name: 'Leopold FC750RBT Two Tone White PD TKL',
          shops: [
            {
              link: 'https://mechanicalkeyboards.com/products/leopold-fc750rbt-bluetooth-two-tone-white-pd?variant=47607554900268',
              name: 'mechanicalkeyboards'
            }
          ],
          image: products['BT-Bluetooth-Two-Tone-White-PD'],
          price: '$124'
        },
        {
          name: 'Varmilo VPE87 Yakumo TKL',
          shops: [
            {
              link: 'https://mechanicalkeyboards.com/products/varmilo-vpe87-yakumo?variant=48978559369516',
              name: 'mechanicalkeyboards'
            }
          ],
          image: products['17370-SQNY8-VPE87-Yakumo'],
          price: '$129.99'
        },
        {
          name: '3060-YRE5Z-MD770',
          shops: [
            {
              link: 'https://mechanicalkeyboards.com/products/mistel-md770?variant=47607383621932',
              name: 'mechanicalkeyboards'
            }
          ],
          image: products['17366-B9U92-VPE87-CMYK'],
          price: '$124'
        }
      ],
      b: [
        {
          name: 'RK Royal Kludge R65',
          shops: [
            {
              link: 'https://aliexpress.ru/item/1005006419392466.html?sku_id=12000037099778096&spm=a2g2w.stores.seller_list.4.7691349a3vt8vw',
              name: 'aliexpress'
            }
          ],
          image: products['Sbc53-7fe394eb4b-7cabb88bce2a4c462fj'],
          price: '$40'
        },
        {
          name: 'Royal Kludge RK61',
          shops: [
            {
              link: 'https://aliexpress.ru/item/1005004587987048.html?sku_id=12000033855450637&spm=a2g2w.stores.seller_list.12.7691349a3vt8vw',
              name: 'aliexpress'
            }
          ],
          image: products['S4322f0bc61b34-bddb97283b1dd065e0aM'],
          price: '$30'
        },
        {
          name: 'Varmilo x MK Glintstone Minilo VXT67',
          shops: [
            {
              link: 'https://mechanicalkeyboards.com/products/varmilo-x-mk-minilo-vxt67-glintstone?variant=47608095473964',
              name: 'mechanicalkeyboards'
            }
          ],
          image: products['15852_63ed149ae54d5_Minilo-VXT67-Glintstone'],
          price: '$119'
        },
        {
          name: 'Varmilo VPE87 CMYK TKL',
          shops: [
            {
              link: 'https://mechanicalkeyboards.com/products/varmilo-vpe87-cmyk?variant=47997022798124',
              name: 'mechanicalkeyboards'
            }
          ],
          image: products['17366-B9U92-VPE87-CMYK'],
          price: '$129'
        },
        {
          name: 'Ducky One 3 TKL Pure White',
          shops: [
            {
              link: 'https://mechanicalkeyboards.com/products/ducky-one-3-tkl-pure-white?variant=47616271155500',
              name: 'mechanicalkeyboards'
            }
          ],
          image: products['107_One-3-TKL-Pure-White'],
          price: '$119'
        },
        {
          name: 'MelGeek Mojo68 RGB LED',
          shops: [
            {
              link: 'https://mechanicalkeyboards.com/products/melgeek-mojo68?variant=47608152981804',
              name: 'mechanicalkeyboards'
            }
          ],
          image: products['15204-YWAMG-Mojo68-Plastic'],
          price: '$184.99'
        },
        {
          name: 'Varmilo VPE87 Yakumo TKL',
          shops: [
            {
              link: 'https://mechanicalkeyboards.com/products/varmilo-vpe87-yakumo?variant=48978559402284',
              name: 'mechanicalkeyboards'
            }
          ],
          image: products['17370-SQNY8-VPE87-Yakumo'],
          price: '$129.99'
        },
        {
          name: 'Ducky x MK Strawberry Frog One 3 Mini',
          shops: [
            {
              link: 'https://mechanicalkeyboards.com/products/ducky-one-3-mini-strawberry-frog?variant=47607930880300',
              name: 'mechanicalkeyboards'
            }
          ],
          image: products['13812_62f17374e1f55_One-3-Mini-Strawberry-Frog'],
          price: '$111.20'
        },
        {
          name: 'Keychron Q6 Max Aluminum',
          shops: [
            {
              link: 'https://mechanicalkeyboards.com/products/keychron-q6-max?variant=48103758987564',
              name: 'mechanicalkeyboards'
            }
          ],
          image: products['18305-9HNJ1-Keychron-Q6-Max'],
          price: '$219'
        },
        {
          name: 'Obinslab Anne Pro 2 White',
          shops: [
            {
              link: 'https://mechanicalkeyboards.com/products/obinslab-anne-pro-2-white?variant=47607374741804',
              name: 'mechanicalkeyboards'
            }
          ],
          image: products['2837-F6VXN-Anne-Pro-2-White'],
          price: '$94'
        },
        {
          name: 'Varmilo Minilo VXT67 Eucalyptus',
          shops: [
            {
              link: 'https://mechanicalkeyboards.com/products/varmilo-minilo-vxt67-eucalyptus?variant=47607997333804',
              name: 'mechanicalkeyboards'
            }
          ],
          image: products['14711_636ac87724028_Minilo-VXT67-Eucalyptus'],
          price: '$119'
        },
        {
          name: 'Leopold FC750RBT V2 Coral/Blue',
          shops: [
            {
              link: 'https://geekboards.ru/product/leopold-fc750r-bt-coral-blue',
              name: 'Geekboards'
            }
          ],
          image: products['18817-N84ZP-Leopold-FC750RBT-V2-Coral-Blue-with-MX2A-Switches'],
          price: '$140'
        }
      ],
      c: [
        {
          name: 'Royal Kludge RK71',
          shops: [
            {
              link: 'https://aliexpress.ru/item/1005003985082785.html?sku_id=12000037582695683&spm=a2g2w.stores.seller_list.9.7691349a3vt8vw',
              name: 'aliexpress'
            }
          ],
          image: products['Scd63f3b-3f62e447ebe9-5f20b78589971S'],
          price: '$40'
        },
        {
          name: 'Ducky One 3 TKL Matcha',
          shops: [
            {
              link: 'https://mechanicalkeyboards.com/products/ducky-one-3-tkl-matcha?variant=47301895029036',
              name: 'mechanicalkeyboards'
            }
          ],
          image: products['6297-RQSVG-One-3-TKL-Matcha'],
          price: '$109'
        },
        {
          name: 'Leopold FC750RBT Two Tone White PD TKL',
          shops: [
            {
              link: 'https://mechanicalkeyboards.com/products/leopold-fc750rbt-bluetooth-two-tone-white-pd?variant=47607554867500',
              name: 'mechanicalkeyboards'
            }
          ],
          image: products['BT-Bluetooth-Two-Tone-White-PD'],
          price: '$124'
        },
        {
          name: 'Leopold FC900R BT White',
          shops: [
            {
              link: 'https://geekboards.ru/product/leopold-fc900r-bt-white',
              name: 'Geekboards'
            }
          ],
          image: products['Leopold-FC900R-BT-White'],
          price: '$99'
        },
        {
          name: 'Ducky One 3 TKL Pure White',
          shops: [
            {
              link: 'https://mechanicalkeyboards.com/products/ducky-one-3-tkl-pure-white?variant=47616271188268',
              name: 'mechanicalkeyboards'
            }
          ],
          image: products['107_One-3-TKL-Pure-White'],
          price: '$119'
        },
        {
          name: 'Ducky One 3 TKL Classic',
          shops: [
            {
              link: 'https://mechanicalkeyboards.com/products/ducky-one-3-tkl-classic?variant=47991344070956',
              name: 'mechanicalkeyboards'
            }
          ],
          image: products['241_One-3-TKL-Classic'],
          price: '$119'
        }
      ]
    }
  }

  context.$configs.constants = constants
}
