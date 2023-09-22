const rate_items = document.querySelectorAll('.rate-item')
const submit = document.getElementById('submit-btn')
const result = document.getElementById('result-main')
const text = document.getElementById('result')
let select_value = 0;


function handlerSelectRate(e) {
    let ele = e.target
    let idx = ele.getAttribute('value')
    select_value = new Number(ele.innerText).valueOf()
    rate_items.forEach(item => {
        item.classList.remove('rate-item-active')
        item.classList.remove('select-before')
    })
    ele.classList.add('rate-item-active')
    if (idx != 0) {
        rate_items[idx - 1].classList.add('select-before')
    }
}

function handlerSubmitRate() {
    if (select_value == 0) {
        confirm('please select rate')
        return false
    }
    result.classList.remove('result-box-hidn')
    result.classList.add('result-box-show')
    let result_text = `You selected out of ${select_value}`
    text.innerText = result_text
}

submit.addEventListener('click', handlerSubmitRate)
rate_items.forEach((item, idx) => {
    item.addEventListener('click', handlerSelectRate)
})