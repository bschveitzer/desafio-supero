import React from "react";
import { Modal, Paper, Typography } from "@material-ui/core";

import "./styles.css";

const DetailsModal = props => {
  const { book = {} } = props;
  return (
    <Modal open={props.open} onClose={props.onClose} className="modal-position">
      {book && (
        <Paper className="modal-style">
          <Typography variant="h4" className="info-row">
            Detalhes do livro
          </Typography>
          <div className="info-row">
            <div>
              <Typography variant="h5">Título</Typography>
              <Typography>{book.title}</Typography>
            </div>
            <div>
              <Typography variant="h5">ISBN</Typography>
              <Typography>{book.ISBN}</Typography>
            </div>
          </div>
          <div className="info-row">
            <div>
              <Typography variant="h5">Editora</Typography>
              <Typography>{book.publisher}</Typography>
            </div>
            <div>
              <Typography variant="h5">Autor</Typography>
              <Typography>{book.author}</Typography>
            </div>
          </div>
          <div className="info-row">
            <div>
              <Typography variant="h5">Idioma</Typography>
              <Typography>{book.language}</Typography>
            </div>
            <div>
              <Typography variant="h5">Ano</Typography>
              <Typography>{book.year}</Typography>
            </div>
          </div>
          <div className="info-row">
            <div>
              <Typography variant="h5">Dimensões (cm)</Typography>
              <Typography>
                {book.dimension.length}x{book.dimension.width}x
                {book.dimension.height}cm
              </Typography>
            </div>
            <div>
              <Typography variant="h5">Peso (g)</Typography>
              <Typography>{book.weight * 1000}g</Typography>
            </div>
          </div>
        </Paper>
      )}
    </Modal>
  );
};
export default DetailsModal;
