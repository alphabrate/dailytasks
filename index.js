tasks = JSON.parse(localStorage.getItem("tasks"));

const addNew = w => {
    let count = w.id;
    if(w.hidden) return;
    let a = document.createElement("div");
    a.classList.add("task");
    console.log(w.done);
    a.innerHTML = `<div class="d"><input type="checkbox" id="c${count}"><label for="c${count}"><div>✓</div></label></div><div class="n"><span style="display:block" id="s${count}">${w.name}</span></div><div class="de" id="d${count}"><span>×</span></div>`
    document.getElementById("tasks").append(a);
    var i = "i"+count;
    var s = "s"+count;
    var c = "c"+count;
    var date = new Date;
    if(w.doneday!=date.getDay()) {
        w.done = false;
    }
    document.getElementById(c).checked = w.done;
    var d = count;
    document.getElementById(`d${count}`).addEventListener("click",()=>{
        tasks[d].hidden = true;
        localStorage.tasks = JSON.stringify(tasks);
        document.getElementById("tasks").style.opacity = "0";
        setTimeout(()=>{
            location.reload();
        },500);
    });
    document.getElementById(`c${count}`).addEventListener("click",()=>{
        tasks[d].done = document.getElementById(c).checked;
        tasks[d].doneday = date.getDay();
        localStorage.tasks = JSON.stringify(tasks);
    });
    count++;
}

if(tasks!=null){
    tasks.forEach(w=>{
        addNew(w);
    });
}

document.getElementById("addn").addEventListener("click",()=>{
    a = document.getElementById("addt").value;
    var ele = {
        "name": a,
        "createdTime": Date.now(),
        "done": false,
        "id": tasks==null?0:tasks.length,
        "doneday": 0,
        "hidden": false
    };
    if(tasks==null) tasks = [];
    tasks.push(ele);
    localStorage.tasks = JSON.stringify(tasks);
    document.getElementById("addnew").style.opacity = "0";
    document.getElementById("tasks").style.opacity = "0";
    setTimeout(()=>{
        location.reload();
    },500);
});

document.getElementById("addc").addEventListener("click",()=>{
    document.getElementById("addnew").style.opacity = "0";
    setTimeout(()=>{
        document.getElementById("addnew").style.display = "none";
    },500);
});

document.getElementById("add").addEventListener("click",()=>{
    document.getElementById("addnew").style.display = "flex";
    setTimeout(()=>{
        document.getElementById("addnew").style.opacity = "1";
    },10);
});