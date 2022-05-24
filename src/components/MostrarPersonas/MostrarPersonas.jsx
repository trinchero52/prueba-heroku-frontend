import petitions from "../petitions";
import * as React from "react";
import { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { List } from "antd";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import "antd/dist/antd.min.css";

export default function MostrarPersonas() {
  const { handleSubmit } = useForm();

  const [personas, setPerson] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await petitions.GetPersonas();
    setPerson(response);
  };

  console.log("personas");
  console.log(personas);

  const onSubmit = (data) => petitions.PostPersonas(data);

  return (
    <React.Fragment>
      <CssBaseline />

      <Container maxWidth="xl">
        <div className="PlaceList">
          <h2>Personas</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Button type="submit" variant="contained">
              Crear persona
            </Button>
            <List
              style={{ background: "white" }}
              itemLayout="horizontal"
              dataSource={["this data is to show a single column"]}
              renderItem={() => (
                <List.Item>
                  <List.Item.Meta title={<h5>Nombre</h5>}></List.Item.Meta>
                  <List.Item.Meta title={<h5>Apellido</h5>}></List.Item.Meta>
                  <List.Item.Meta
                    title={<h5>Fecha de nacimiento</h5>}
                  ></List.Item.Meta>
                  <List.Item.Meta title={<h5>Ciudad</h5>}></List.Item.Meta>
                  <List.Item.Meta title={<h5>Email</h5>}></List.Item.Meta>
                </List.Item>
              )}
            />
            <List
              style={{ background: "#c2dbfa" }}
              itemLayout="horizontal"
              dataSource={personas}
              renderItem={(person) => (
                <List.Item>
                  <List.Item.Meta title={person.nombre}></List.Item.Meta>
                  <List.Item.Meta title={person.apellido}></List.Item.Meta>
                  <List.Item.Meta
                    title={person.fechaNacimiento}
                  ></List.Item.Meta>
                  <List.Item.Meta title={person.ciudad}></List.Item.Meta>
                  <List.Item.Meta title={person.mail}></List.Item.Meta>
                </List.Item>
              )}
            />
          </form>
        </div>
      </Container>
    </React.Fragment>
  );
}
