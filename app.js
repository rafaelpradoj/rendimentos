const form = document.querySelector('form')
const result = document.querySelector('.result')

form.addEventListener('submit', event => {
  event.preventDefault()
  const precoAcao = Number(event.target.formQuestion1.value)
  const rendimentoCota = Number(event.target.formQuestion2.value)
  const prazoAplicacao = Number(event.target.formQuestion3.value)
  const depositoMensal = Number(event.target.formQuestion5.value)

  let capital = Number(event.target.formQuestion4.value)
  let quantidadeCotas = 0

  let counter = 1

  while (counter <= prazoAplicacao) {
    capital += depositoMensal + quantidadeCotas * rendimentoCota

    while (capital >= precoAcao) {
      capital -= precoAcao
      quantidadeCotas++
    }

    counter++
  }

  const rendimentoMensal = (quantidadeCotas * rendimentoCota).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  const patrimonio = (quantidadeCotas * precoAcao).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })


  result.innerHTML = `
    <p>
      Total de cotas ao fim de ${prazoAplicacao} meses: ${quantidadeCotas}
    </p>
    <p>
      Patrimônio ao fim de ${prazoAplicacao} meses: ${patrimonio}
    </p>
    <p>
      Dividendos mensais ao fim de ${prazoAplicacao} meses: ${rendimentoMensal}
    </p>
  `

  event.target.reset()
})