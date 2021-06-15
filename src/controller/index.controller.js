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


const getResultmes = async (req, res) => {
    const mes= req.params.mes;
    const response =  await pool.query('select * from predictiondb where mes = $1', [mes] );
    res.status(200).json(response.rows)
}

const getPtotal = async (req, res) => {
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

const updateResult = async (req, res) => {
    const mes = req.params.mes;
    const {resultado} = req.body;
    const response = await pool.query('UPDATE public.predictiondb SET resultado = $1 WHERE mes=$2', [resultado,mes]);
    res.send('Listo');

}



module.exports= {
    getPtotal,
    postDatos,
    getPre,
    getResultmes,
    updateResult
}

