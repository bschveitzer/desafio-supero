import React from "react";
import { Paper, Typography, ButtonGroup, Button } from "@material-ui/core";
import {
  FirstPage,
  NavigateBefore,
  NavigateNext,
  LastPage
} from "@material-ui/icons";
import "./styles.css";

const Table = props => {
  const { books, pages, page } = props;
  const buttons = () => {
    let buttons = [];
    for (let index = 1; index <= pages; index++) {
      buttons.push(
        <Button
          variant={index === page ? "contained" : ""}
          onClick={() => props.onPageClick(index)}
        >
          {index}
        </Button>
      );
    }
    return buttons;
  };
  return (
    <div>
      <Paper className="table-style">
        <div className="row header">
          <div className="cell">Livro</div>
          <div className="cell">Autor</div>
          <div className="cell">Editora</div>
          <div className="cell">Ano</div>
        </div>
        {books.length > 0 &&
          books.map((book, index) => (
            <div
              className="row"
              key={book.id}
              onClick={() => props.onRowClick(book)}
            >
              <div className="cell">
                <div>{book.title}</div>
                <div>{book.ISBN}</div>
              </div>
              <div className="cell">{book.author}</div>
              <div className="cell">{book.publisher}</div>
              <div className="cell">{book.year}</div>
            </div>
          ))}
        {books.length <= 0 && (
          <div className="row">
            <Typography className="cell">
              Sem resultados para a busca.
            </Typography>
          </div>
        )}
      </Paper>
      <ButtonGroup
        aria-label="outlined secondary button group"
        color="primary"
        className="pagination"
      >
        <Button
          onClick={() => props.onPageClick(1)}
          startIcon={<FirstPage />}
        ></Button>
        <Button
          onClick={() => props.onPageClick(page - 1)}
          startIcon={<NavigateBefore />}
        ></Button>
        {buttons()}
        <Button
          onClick={() => props.onPageClick(page + 1)}
          endIcon={<NavigateNext />}
        ></Button>
        <Button
          onClick={() => props.onPageClick(pages)}
          endIcon={<LastPage />}
        ></Button>
      </ButtonGroup>
    </div>
  );
};
export default Table;
