

const donutMaker = new DonutMaker()
const aboutUs = document.querySelector(".about-fred")
const dev = document.querySelector(".theDev")
const resetBtn = document.querySelector(".reset")
const acValue = document.querySelector(".ac-count")
const acBtn = document.querySelector(".ac-btn")
const acCost = document.querySelector(".ac-cost")
const donutCount = document.querySelector(".donut-count")
const donutBtn = document.querySelector(".make-donut")
const donutValue = document.querySelector(".donut-value")
const multiplierCount = document.querySelector(".m-count")
const multiplierBtn = document.querySelector(".m-btn")
const multiplierCost = document.querySelector(".m-cost")


const about = () => {
  if (aboutUs.style.display === "block") {
    aboutUs.style.display = "none"
  } else {
    aboutUs.style.display = "block"
  }
}

const showDev = () => {
  if (dev.style.display === "block") {
    dev.style.display = "none"
  } else {
    dev.style.display = "block"
  }
}

const clearScreen = resetBtn => {
  resetBtn.addEventListener("click", () => {
    location.reload()
  })
}


const updateDonutCount = (donutCount, donutMaker) => {
  donutCount.textContent = Math.round(donutMaker.getDonutCount())
}

const updateAutoClickerCount = (acValue, donutMaker) => {
  acValue.textContent = Math.round(donutMaker.getAutoClickerCount())
}

const updateAutoClickerCost = (acCost, donutMaker) => {
  acCost.textContent = Math.round(donutMaker.getAutoClickerCost())
}

const updateMultiplierCount = (MultiplierCount, donutMaker) => {
  MultiplierCount.textContent = Math.round(donutMaker.getMultiplierCount())
}

const updateMultiplierCost = (multiplierCost, donutMaker) => {
  multiplierCost.textContent = Math.round(donutMaker.getMultiplierCost())
}

const updateDonutValue = (donutValue, donutMaker) => {
  donutValue.textContent = donutMaker.getDonutValue().toFixed(1)
}


const autoClicker = setInterval(autoClick, 1000)

function autoClick() {
  updateDonutCount(donutCount, donutMaker)
  donutMaker.makeAutoClickerWork()
  enableAutoClickerBtn()
  enableMultiplierBtn()
}


const makeDonutBtn = (donutBtn, donutCount, donutMaker) => {
  donutBtn.addEventListener("click", () => {
    donutMaker.donutClicked()
    updateDonutCount(donutCount, donutMaker)
  })
}

const makeAutoClickerBtn = (acValue, acBtn, acCost, donutMaker) => {
  acBtn.addEventListener("click", () => {
    donutMaker.addAutoClicker()
    updateAutoClickerCount(acValue, donutMaker)
    updateAutoClickerCost(acCost, donutMaker)
  })
}

const makeMultiplierBtn = (
  multiplierCount,
  multiplierBtn,
  multiplierCost,
  donutMaker
) => {
  multiplierBtn.addEventListener("click", () => {
    donutMaker.addMultiplier()
    updateMultiplierCount(multiplierCount, donutMaker)
    updateMultiplierCost(multiplierCost, donutMaker)
    updateDonutValue(donutValue, donutMaker)
  })
}


function enableAutoClickerBtn() {
  if (donutMaker.donutClick >= donutMaker.autoClickerCost) {
    acBtn.removeAttribute("disabled")
  } else {
    acBtn.disabled = true
  }
}

function enableMultiplierBtn() {
  if (donutMaker.donutClick >= donutMaker.multiplierCost) {
    multiplierBtn.removeAttribute("disabled")
  } else {
    multiplierBtn.disabled = true
  }
}

clearScreen(resetBtn)
makeDonutBtn(donutBtn, donutCount, donutMaker)
makeAutoClickerBtn(acValue, acBtn, acCost, donutMaker)
updateDonutValue(donutValue, donutMaker)
makeMultiplierBtn(multiplierCount, multiplierBtn, multiplierCost, donutMaker)

