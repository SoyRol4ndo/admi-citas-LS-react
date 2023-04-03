import React, { Fragment, useState } from 'react';

const Formulario = ( { crearCita } ) =>
{

    // Crear el state de Citas
    const [ cita, setCita ] = useState( {
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: '',
    } )

    const [ error, setError ] = useState( false )

    // Funcion que se actualiza cada vez que el usuario escribe en un input
    const actualizarState = e =>
    {
        setCita( {
            ...cita,
            [ e.target.name ]: e.target.value
        } )
    }

    // Extraer los valores
    const { mascota, propietario, fecha, hora, sintomas } = cita;

    // Submit al formulario
    const submitCita = e =>
    {
        e.preventDefault();

        // Validar
        if ( mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '' )
        {
            setError( true );
            return;
        }

        // Eliminar el mensaje previo
        setError( false );

        // Asignar un ID
        const getid = new Date();
        cita.id = getid.getTime();

        // Crear la cita
        crearCita( cita );

        // Reiniciar el Fromulario
        setCita( {
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: '',
        } )

    }

    return (
        <Fragment>
            <h2> Crear Cita</h2>

            { error ? <p className='alerta-error'>Todos los campos son Obligatorios</p> : null }
            <form
                onSubmit={ submitCita }
            >
                <label>Nombre Mascota</label>
                <input
                    type='text'
                    name='mascota'
                    placeholder='Nombre de la Mascota'
                    className='u-full-width'
                    onChange={ actualizarState }
                    value={ mascota }
                />
                <label>Nombre Dueño</label>
                <input
                    type='text'
                    name='propietario'
                    placeholder='Nombre del Dueño de la Mascota'
                    className='u-full-width'
                    onChange={ actualizarState }
                    value={ propietario }
                />
                <label>Fecha de Alta</label>
                <input
                    type='date'
                    name='fecha'
                    className='u-full-width'
                    onChange={ actualizarState }
                    value={ fecha }
                />
                <label>Hora de Alta</label>
                <input
                    type='time'
                    name='hora'
                    className='u-full-width'
                    onChange={ actualizarState }
                    value={ hora }
                />
                <label>Sintomas</label>
                <textarea
                    className='u-full-width'
                    name='sintomas'
                    onChange={ actualizarState }
                    value={ sintomas }
                ></textarea>
                <button
                    type='submit'
                    className='u-full-width button-primary'
                >Agregar Cita</button>
            </form>
        </Fragment>
    );
}

export default Formulario;