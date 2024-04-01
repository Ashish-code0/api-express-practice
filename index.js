import  express  from "express";
const PORT = 5000;

const app = express();
app.use(express.json());

// THOSE WITH GET are API that have to parameters
app.get('/year2', (req, res) => {
    res.json({
        student : 100,
        age : 20
    })
})

app.get('/year3', (req, res) => {
    res.json({
        student : 200,
        age : 21
    })
})

app.get('/year4', (req, res) => {
    res.json({
        student : 300,
        age : 22
    })
})
//HERE we pass parameters to API using different ways

// USING QUERY AS A PARAMETER
app.get('/year/student', (req, res) => {
    const {roll, name, remark} = req.query;

    console.log('#################')
    console.log(req.query)
    console.log('#################')

    res.json({
        detail : `Student Name: ${name} and Roll no: ${roll}`,
        remark: `Has ${remark}`
    })
});

//Using PATH PARAMETER AS parameter
// Similar as advanced routing in REACT
app.get('/col/:dept', (req, res) => {
    const {dept} = req.params;
    console.log('#################')
    console.log(dept)
    console.log('#################')

    if(dept == 'ce'){
        return res.json({
            students : 500,
            year2: 150,
            year3: 200,
            year4: 150
        })
    }
    else if (dept == 'ext'){
        return res.json({
            students : 300,
            year2: 100,
            year3: 100,
            year4: 100
        })
    }
    else if(dept == 'ee'){
        return res.json({
            students : 150,
            year2: 50,
            year3: 50,
            year4: 50
        })
    }

})

//HEADER parameters are not shown but only used for technical data from the project.
//Header parameters gives technical details about the working.
app.get('/col/dept/class', (req, res) => {
    const {strength, year } = req.query;
    const {status, incharge} = req.headers;

    console.log('#################')
    console.log(req.query);
    console.log(`Class is : ${status} and the Incharge is : ${incharge}`)
    console.log('#################')

    res.json({
        strength: `${strength}`,
        Year: `${year}`
    })
});


// Body data passing is used when data to be send is large 
app.post('/dean', (req, res)=>{
    const {name, department} = req.body;
    console.log('#########');
    console.log(req.body);
    console.log('#########');

    res.json({
        msg : `${department} departments Dean name is : ${name}`
    })

});

app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`)
});