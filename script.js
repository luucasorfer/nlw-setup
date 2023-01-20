const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)

const data = { 
  run: ['01-01', '01-02'], 
  water: ['01-04', '01-05'],
  food: ['01-01', '01-03'],
  takePills: ['01-03'],
  journal: ['01-02'],
}

nlwSetup.setData(data)
nlwSetup.load()