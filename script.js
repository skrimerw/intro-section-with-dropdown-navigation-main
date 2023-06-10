const mobileNavOverlay = document.querySelector(".overlay")
const mobileNav = document.querySelector(".mobile-nav")
const bars = document.querySelector(".bars")
const body = document.querySelector("body")
const cross = document.querySelector(".cross")
const company = document.querySelector(".company")
const companyArrow = document.querySelector("#company-arrow")
const companySecondaryLinks = document.querySelector("#company-secondary-links")
const features = document.querySelector(".features")
const featuresArrow = document.querySelector("#features-arrow")
const featuresSecondaryLinks = document.querySelector("#features-secondary-links")
const heroMobile = document.querySelector(".hero-mobile")
const heroDesktop = document.querySelector(".hero-desktop")
const mainCompany = document.querySelector("#main-company")
const mainCompanyArrow = document.querySelector("#main-company-arrow")
const mainCompanySecondaryLinks = 
document.querySelector("#main-company-secondary-links")
const mainFeatures = document.querySelector("#main-features")
const mainFeaturesArrow = document.querySelector("#main-features-arrow")
const mainFeaturesSecondaryLinks = 
document.querySelector("#main-features-secondary-links")

bars.addEventListener("click", () => {
    if (!companySecondaryLinks.classList.contains("hidden")) {
        companySecondaryLinks.classList.add('hidden')
    }
    if (!featuresSecondaryLinks.classList.contains("hidden")) {
        featuresSecondaryLinks.classList.add('hidden')
    }
    if (companyArrow.classList.contains("rotate")) {
        companyArrow.classList.remove('rotate')
    }
    if (featuresArrow.classList.contains("rotate")) {
        featuresArrow.classList.remove('rotate')
    }
    mobileNavOverlay.classList.remove("hidden")
    mobileNav.classList.remove("out-animation")
    body.classList.add("overflow")
})

cross.addEventListener("click", () => {
    mobileNav.classList.add("out-animation")
    setTimeout(() => {
        mobileNavOverlay.classList.add("hidden")
    }, 200)
    body.classList.remove("overflow")
})

company.addEventListener("click", () => {
    companySecondaryLinks.classList.toggle('hidden')
    companyArrow.classList.toggle("rotate")
})

features.addEventListener("click", () => {
    featuresSecondaryLinks.classList.toggle('hidden')
    featuresArrow.classList.toggle("rotate")
})

window.addEventListener("resize", () => {
    if ((window.innerWidth >= 968)
        && !mobileNav.classList.contains("hidden")) {
            mobileNavOverlay.classList.add("hidden")
    }
})

mainCompany.addEventListener("mouseenter", () => {
    mainCompanySecondaryLinks.classList.remove('hidden')
    mainCompanyArrow.classList.add("rotate")
})

mainCompany.addEventListener("mouseleave", (event) => {
    if (event.clientY >= 55 && event.clientY <= 80) {
        return
    } else {
        mainCompanySecondaryLinks.classList.add('hidden')
        mainCompanyArrow.classList.remove("rotate")
    }
})

mainFeatures.addEventListener("mouseenter", () => {
    mainFeaturesSecondaryLinks.classList.remove('hidden')
    mainFeaturesArrow.classList.add("rotate")
})

mainFeatures.addEventListener("mouseleave", (event) => {
    console.log(event)
    if (event.clientY >= 55 && event.clientY <= 80) {
        return
    } else {
        mainFeaturesSecondaryLinks.classList.add('hidden')
        mainFeaturesArrow.classList.remove("rotate")
    }
})
