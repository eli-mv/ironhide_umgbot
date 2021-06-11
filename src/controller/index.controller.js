const { response } = require('express');
const { restart } = require('nodemon');
const { Pool } = require('pg');

const pool = new Pool({
    host:'postgresql-34334-0.cloudclusters.net',
    user: 'skay',
    password:'Umg123456',
    database:'ironhidedb',
    port:'34334'
    
});

const getUsers = async (req, res) => {
    const response = await pool.query('select * from predictiondb' );
    console.log(response.rows);
    res.status(200).json(response.rows)
}
const getPre  = async (req, res) => {
    const response = await pool.query('select * from predictiondb order by anio asc limit 3' );
    console.log(response.rows);
    res.status(200).json(response.rows)
}

const postDatos = async (req, res) => {
    const {anio, mes, resultado} = req.body
   const response = await pool.query('INSERT INTO public.predictiondb(anio, mes, resultado) VALUES ($1, $2, $3)', [anio, mes, resultado]);
   console.log(response);
   res.send('Registro ingresado correctamtente');

}


module.exports= {
    getUsers,
    postDatos,
    getPre
}

