document.addEventListener('DOMContentLoaded',()=>{const ERROR_CLEAR_TIMEOUT=5000
const contactForm=document.querySelectorAll('form.form-ajax')
contactForm.forEach(form=>{const contactResp=form.querySelector('.form-response')
const contactFormAccept=form.querySelector('#form-accept')
const contactFormSubmitButton=form.querySelector('button[type=submit]')
const form_loader=form.querySelector('button[type=submit] .form-loader')
form.addEventListener('submit',event=>{event.preventDefault()
clearContactResp(contactResp)
if(isEmpty(form,contactResp,'input[name=your-name]','<span>Please fill out field Your Name.</span>')){return false;}
if(isEmpty(form,contactResp,'input[name=your-message]','<span>Please fill out field Your Message.</span>')){return false;}
if(contactFormAccept&&!contactFormAccept.checked){contactResp.innerHTML=`<span>Please accept our Terms of Service and Privacy Policy first.</span>`
return false}
const url=form.getAttribute('action')
if(!url)return;const formData=new FormData(form)
let gaCid=localStorage.getItem('ga-cid')
if(typeof ga==='function'&&typeof ga.getAll==='function'){const tracker=ga.getAll()[0];gaCid=tracker.get('clientId');}
formData.set('cid',gaCid);formData.set('firstPage',localStorage.getItem('fs-referrer'))
formData.set('gaPage',localStorage.getItem('ga-referrer'))
contactFormSubmitButton.disabled=true
if(form_loader){form_loader.classList.add('active');}
grecaptcha.ready(()=>{grecaptcha.execute('6LfbWUIcAAAAAG02Oy5MovTlaZfU91DxmwHCJ08Q',{action:'submit'}).then((token)=>{formData.set('captcha',token)
fetch(url,{method:"POST",body:formData}).then(res=>{if(!res.ok){throw new Error('<span>Internal Server Error. Try again later</span>');}
return res}).then(res=>res.json()).then(res=>{contactResp.innerHTML=res.message
localStorage.removeItem('fs-referrer');localStorage.removeItem('ga-referrer');resetForm(form,contactFormAccept);setTimeout(()=>clearContactResp(contactResp),ERROR_CLEAR_TIMEOUT);const fd=new FormData(form)
let inputs=[]
for(let pair of formData.entries()){inputs.push({name:pair[0],value:pair[1]})}
const re=/email|name|message|msg|phone/i
let form_data=inputs.filter(el=>re.test(el.name)).map(el=>{if(/email/i.test(el.name)){return{label:'email',value:el.value}}
if(/name/i.test(el.name)){return{label:'fio',value:el.value}}
if(/message|msg/i.test(el.name)){return{label:'comment',value:el.value}}
if(/phone/i.test(el.name)){return{label:'phoneNumber',value:el.value}}})
const calltouch_res=calltouch_integrate(form_data)
calltouch_res.finally(()=>form.reset())
if(window.dataLayer){window.dataLayer.push({'event':'form_send_ok'})}}).catch(error=>{console.log(error)
contactResp.innerHTML=error.message
setTimeout(()=>clearContactResp(contactResp),ERROR_CLEAR_TIMEOUT);}).finally(()=>{contactFormSubmitButton.disabled=false
if(form_loader){form_loader.classList.remove('active')}})})})
return false})})
function resetForm(form,trigger){form.reset();setupAcceptTrigger(form,trigger);const fileLabel=form.querySelector("label[for=form-file]")
if(fileLabel){fileLabel.innerHTML='<span>Attach File</span>'}}
function setupAcceptTrigger(form,trigger){const acceptEl=form.querySelector('.acceptance-860')
if(trigger){if(trigger.checked&&acceptEl)
acceptEl.classList.add('wpcf7-acceptance-act')
else
acceptEl.classList.remove('wpcf7-acceptance-act')}}
function isEmpty(form,resp,selector,message){const contactName=form.querySelector(selector)
if(!contactName)return false
const actualNameString=contactName.value.trim()
if(actualNameString.length<1){resp.innerHTML=`<span>${message}</span>`
return true;}else return false;}
function clearContactResp(resp){if(resp)resp.innerHTML=''}
function calltouch_integrate(data){let siteID='48355'
let calltouch_session_mod_id='n0k7y0j9'
let formInfo=new FormData();formInfo.append('sessionId',window.ct('calltracking_params',calltouch_session_mod_id)?.sessionId||null)
formInfo.append('subject','Form data from Fireart.studio site')
formInfo.append('requestUrl',location.href)
data.forEach(el=>{formInfo.append(el.label,el.value)})
return fetch(`https://api.calltouch.ru/calls-service/RestAPI/requests/${siteID}/register/`,{method:'POST',body:formInfo})}
const formFileInput=document.getElementById('form-file')
if(formFileInput){formFileInput.addEventListener('change',()=>{formFileInput.classList.add('active')})}})