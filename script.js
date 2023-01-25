var day = new Date() 
const weekday = new Array("Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday")
const curDay = weekday[day.getDay()]
console.log(curDay)




base = '/team.json'
fetch(base)
.then((response) => {
    return response.json(); 
})
    .then((users) => { 
        for (a in users){
            console.log(a)
            if (a.id == 1){
                console.log(1)
                chore = '/chores/choreA.json'
                fetch(chore)
                .then((response) => {
                  return response.json();
            }).then((base) => {
                if (a.id = base.id){
                    base.name = a.team_name
                    console.log(base)
                }

            })
         }
     }})




