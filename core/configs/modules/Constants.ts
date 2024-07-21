import { nuxtContext } from '@nuxt/types'
import { Question } from '@/types/index.ts'
import { filename } from 'pathe/utils'

export default (context: nuxtContext) => {
  const iconGlobal = import.meta.glob('@img/icon/*', { eager: true })
  const icons = Object.fromEntries(Object.entries(iconGlobal).map(([key, value]) => [filename(key), value.default]))

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
            icon: icons['pickaxe']
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
    }
  }

  context.$configs.constants = constants
}
