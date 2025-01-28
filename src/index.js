import { gsap } from 'gsap'

const testimonials = [
    {
        author: 'Joana Pereira',
        profession: 'Designer Gráfico',
        text: 'Nunca me senti tão motivada a treinar! A equipe da academia é incrível e sempre me apoia nos meus objetivos. Em poucos meses, já sinto a diferença na minha energia e autoestima.',
    },
    {
        author: "Carlos Silva",
        profession: "Analista de Sistemas",
        text: "Treinar nessa academia mudou minha rotina! Além de melhorar meu condicionamento físico, ganhei disciplina para enfrentar o dia com mais disposição.",
      },
      {
        author: "Fernanda Costa",
        profession: "Nutricionista",
        text: "Sempre recomendo essa academia aos meus pacientes. O ambiente é agradável, os profissionais são atenciosos e incentivam um estilo de vida saudável.",
      },
      {
        author: "Gustavo Almeida",
        profession: "Empresário",
        text: "Investir no meu treino foi uma das melhores decisões que tomei. A estrutura e os equipamentos da academia são de ponta, e a motivação vem naturalmente!",
      }
]

let currentIndex = 0
const card = document.getElementById('testimonial-card')
const textElement = document.getElementById('testimonial-text')
const authorElement = document.getElementById('author-name')
const professionElement = document.getElementById('author-profession')

function updateTestimonial(index, direction) {
    gsap.to(card, {
        x: direction === 'next' ? 100 : -100,
        opacity: 0,
        duration: 0.4,
        onComplete: () => {
            textElement.textContent = testimonials[index].text
            authorElement.textContent = testimonials[index].author
            professionElement.textContent = testimonials[index].profession
            gsap.fromTo(
                card,
                { x: direction === 'next' ? -100 : 100, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.4 }
            )
        },
    })
}

document.getElementById('prev-btn').addEventListener('click', () => {
    currentIndex =
        (currentIndex - 1 + testimonials.length) % testimonials.length
    updateTestimonial(currentIndex, 'prev')
})

document.getElementById('next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length
    updateTestimonial(currentIndex, 'next')
})
