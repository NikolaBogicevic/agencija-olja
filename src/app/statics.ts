import budget from './budget.png'
import schedule from './schedule.png'
import teamwork from './teamwork.png'
import audit from './audit.png'
import accounting from './accounting.png'

export const services =  [
    {
      title: 'Финансије',
      body: 'Финансије представљају врсту уметности и науке управљања новцем.',
      icon: budget,
  
  },
  {
    title: 'Ревизија',
    body: 'Финансијска ревизија се спроводи да би се дало мишљење о томе да ли је „финансијски извештај“ (информација која се ревидира) у складу са одређеним критеријумима.',
    icon: schedule,

},
{
  title: 'Осигурање',
  body: 'Осигурање је облик управљања ризицима, првенствено усмерен на смањење финансијских губитака. Осигурање је пренос ризика са осигураника на друштво за осигурање, уз плаћање премије осигурања.',
  icon: teamwork,

},
{
  title: 'Планирање',
  body: 'Планирање представља, као процес, управљачку функцију којом се утврђују циљеви текућег пословања и развоја организације, затим предвиђају и дефинишу будући задаци, као и услови у којима ови задаци треба да се извршавају и циљеви остварују.',
  icon: audit,

},
{
  title: 'Финансијско планирање',
  body: 'Финансијско планирање је конкретизација финансијске политике финансијским плановима који циљ финансијске политике стављају у вредносни израз у времену и простору.',
  icon: accounting,

},
// {
//   title: 'Osnivanje i registracija paušalne, preduzetničke radnje ili firme (DOO)',
//   body: 'Podrazumevane usluge: savetovanje o pravnoj formi, registracija kod APR-a, preuzimanje rešenja i priprema dokumentacije, prijava na obavezno socijalno osiguranje, ažuriranje zdravstvene kartice, izrada akta o osnivanju, regulisanje fiskalizacije (ukoliko je potrebno), priprema obavezne dokumentacije',
//   icon: accounting,

// },
  ]


export const questions =  [
  {   id: 1,
      title: 'Колика је цена ваших услуга?',
      body: 'Да бисмо могли да формирамо цену за наше услуге неопходно је да нам доставите детаљне податке о вашој фирми, као што су просечан број улазних и излазних рачуна, број запослених, укупан приход и слично.',
  },
  {   id: 2,
      title: 'Да ли ваши запослени говоре енглески?',
      body: 'Већина наших запослених техничко говори и пише енглески језик.',
  },
  {   id: 3,
      title: 'Да ли документацију морамо предати лично или електронски?',
      body: 'Документацију можете доставити електронским путем, а оригиналe архивирати код себе, а након тога (накнадно), у договореном року, достављате и оргиналну документацију.',
  },
  {   id: 4,
      title: 'Да ли обављате административне услуге за клијенте?',
      body: 'Вршимо и овај вид услуга за клијенте, али је неопходно да се усагласи обим и садржај истих приликом успостављања сарадње.',
  },
  {   id: 5,
      title: 'Да ли је печат неопходан?',
       body: 'Печат више није неопходан. Престао је да буде обавезна ставка у пословању.',
  },
  {   id: 6,
      title: 'Како отворити радњу електронским путем?',
       body: '1.отварање корисничког налога на сајту АПР,2.будући власник мора поседовати личну карту са електронским сертификатом,3.уплаћена такса АПР-у за регистрацију у износу од 1000рсд,4.за неке делатности су потребне сагласности,5.овлашћење за прокуру, АПР у року од 5 радних дана шаље решење о регистрацији, ПИБ и пријаву предузетника на социјално осигурање.',
  },
    ]