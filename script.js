function update(id,ok){

let item=
document.getElementById(id);

if(ok){

item.className="good";

item.innerHTML=
"✔ "+item.innerHTML.substring(2);

}

else{

item.className="bad";

item.innerHTML=
"✖ "+item.innerHTML.substring(2);

}

}

function checkPassword(){

let p=
document.getElementById(
"password"
).value;

let score=0;

let a=
p.length>=8;

let b=
/[A-Z]/.test(p);

let c=
/[a-z]/.test(p);

let d=
/[0-9]/.test(p);

let e=
/[!@#$%^&*]/.test(p);

update("r1",a);

update("r2",b);

update("r3",c);

update("r4",d);

update("r5",e);

if(a)score++;

if(b)score++;

if(c)score++;

if(d)score++;

if(e)score++;

let bar=
document.getElementById(
"bar"
);

let status=
document.getElementById(
"status"
);

if(score<=2){

bar.style.width=
"30%";

bar.style.background=
"red";

status.innerHTML=
"Weak ❌";

}

else if(score<=4){

bar.style.width=
"70%";

bar.style.background=
"orange";

status.innerHTML=
"Medium ⚠";

}

else{

bar.style.width=
"100%";

bar.style.background=
"green";

status.innerHTML=
"Strong ✅";

}

}

function togglePassword(){

let p=
document.getElementById(
"password"
);

if(p.type=="password")
p.type="text";

else
p.type="password";

}