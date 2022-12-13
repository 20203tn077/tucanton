const loader = document.getElementById('loader')
const loaded = () => {
    loader.style.opacity = '0'
    setTimeout(() => loader.style.display = 'none', 1000)
}
const loading = () => {
    loader.style.display = 'initial'
    loader.style.opacity = '1'
}
const getBankImage = bank => ({
    'Banco Azteca': 'banco_azteca.png',
    'BanCoppel': 'bancoppel.png',
    'BBVA': 'bbva.png',
    'Citibanamex': 'citibanamex.png',
    'Mastercard': 'mastercard.png',
    'Nu': 'nu.png',
    'Visa': 'visa.png'
})[bank] || ''
const getBankColor = bank => ({'background-color': ({
    'Banco Azteca': '#08874A',
    'BanCoppel': '#DBA721',
    'BBVA': '#153A82',
    'Citibanamex': '#778492',
    'Nu': '#6214AF',
})[bank] || '#212B36'})
const getSessionUser = () => JSON.parse(localStorage.getItem('session_user'))
const logout = () => {
    localStorage.removeItem('session_user')
    window.location.replace('/app/views/inicio_de_sesion.html')
}