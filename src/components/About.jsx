import React from 'react';
import { makeStyles } from '@mui/material';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import App from "./App.jsx"


const AboutPage = () => {

  return (
    <Container maxWidth="md">
      <App/>
      <Paper marginTop={4} style={{padding: "3px"}}>
        <Typography variant="h4" gutterBottom>
          Acerca de la Clínica Santiago en Santo Domingo, Ecuador
        </Typography>
        <Typography variant="body1">
          La Clínica Santiago es un centro médico líder en Santo Domingo, Ecuador,
          que se dedica a brindar atención médica de alta calidad a la comunidad local.
          Nuestro compromiso es proporcionar servicios médicos avanzados con un enfoque
          en la atención personalizada y el bienestar del paciente.
        </Typography>
        <Typography variant="body1">
          En la Clínica Santiago, contamos con un equipo de médicos altamente capacitados,
          enfermeras dedicadas y tecnología de vanguardia para garantizar el mejor cuidado
          posible para nuestros pacientes. Nos enorgullece servir a la comunidad y contribuir
          a la salud y el bienestar de todos.
        </Typography>
        <Typography variant="body1">
          Siempre estamos buscando formas de mejorar nuestros servicios y expandir nuestras
          capacidades para satisfacer las necesidades cambiantes de la comunidad. Agradecemos
          su confianza en nosotros y esperamos seguir siendo su elección número uno para la atención médica.
        </Typography>
      </Paper>
    </Container>
  );
};

export default AboutPage;
