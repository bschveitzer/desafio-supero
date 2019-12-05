import React, { Component } from "react";
import "./styles.css";
import "typeface-roboto";
import Header from "../../components/header/index";
import Table from "../../components/table/index";
import Filter from "../../components/filter/index";
import DetailsModal from "../../components/details";
import api from "../../services/api";

export default class Main extends Component {
  //Declaração do estado do componente e possível timeout.
  timeout;
  state = {
    books: [],
    filteredArray: [],
    searchTerm: "",
    pagination: 1,
    isLoading: false,
    count: 0,
    pages: 1,
    initialDate: "",
    finalDate: "",
    isOpen: false,
    selectedBook: null
  };
  componentDidMount() {
    this.handleSearch();
  }

  // Atualização das informações vindas do input de busca.
  handleChange = event => {
    this.setState({ ...this.state, searchTerm: event.target.value });
  };

  // Método de busca de livros de acordo com input de busca,
  // retorna todos os livros caso não tenha termo de busca.
  handleSearch = async (event, pagination) => {
    try {
      const page = pagination ? pagination : 1;

      this.setState({ ...this.state, isLoading: true });
      const response = await api.get(
        `/books?search=${this.state.searchTerm}&page=${page}&initialDate=${this.state.initialDate}&finalDate=${this.state.finalDate}`
      );

      this.setState({
        ...this.state,
        pagination: response.data.page,
        books: response.data.docs,
        count: response.data.total,
        pages: response.data.pages,
        filteredArray: response.data.docs
      });
    } catch (err) {
      window.alert("Erro ao buscar livros.");
    } finally {
      this.setState({ ...this.state, isLoading: false });
    }
  };
  handleEnterClick = target => {
    if (target.charCode === 13) this.handleSearch();
  };

  //Método para verificação das informações de input de datas
  // e filtragem
  handleDateChange = async (event, type) => {
    clearTimeout(this.timeout);
    if (event.target.value > 9999) return;

    this.setState({ ...this.state, [type]: event.target.value });

    if (!this.state.initialDate || !this.state.finalDate) return;

    if (
      (type === "initialDate" && event.target.value > this.state.finalDate) ||
      event.target.value < 1000
    )
      return;
    this.timeout = setTimeout(() => {
      this.handleSearch();
    }, 1000);
  };

  //Método responsável pela paginação da tabela
  handlePageClick = page => {
    if (page === this.state.page || page < 1 || page > this.state.pages) return;
    this.handleSearch({}, page);
  };

  //Método de click em um dos livros para mostrar detalhes
  handleRowClick = async book => {
    try {
      this.setState({ ...this.state, isLoading: true });
      const response = await api.get(`/book/${book._id}`);
      this.setState({
        ...this.state,
        selectedBook: response.data,
        isOpen: true
      });
    } catch (err) {
      window.alert("Erro ao buscar detalhes.");
    } finally {
      this.setState({ ...this.state, isLoading: false });
    }
  };

  //Método de fechamento do modal e limpeza do livro selecionado
  handleCloseModal = () => {
    this.setState({ ...this.state, selectedBook: null, isOpen: false });
  };

  render() {
    const {
      isLoading,
      searchTerm,
      filteredArray,
      count,
      pages,
      initialDate,
      finalDate,
      pagination,
      isOpen,
      selectedBook
    } = this.state;
    return (
      <div>
        <Header
          onSearch={this.handleSearch}
          onChange={this.handleChange}
          isLoading={isLoading}
          searchTerm={searchTerm}
          onEnterClick={this.handleEnterClick}
        />
        <Filter
          count={count}
          onChange={this.handleDateChange}
          initialDate={initialDate}
          finalDate={finalDate}
        />
        <Table
          books={filteredArray}
          count={count}
          page={pagination}
          pages={pages}
          onPageClick={this.handlePageClick}
          onRowClick={this.handleRowClick}
        />
        <DetailsModal
          open={isOpen}
          onClose={this.handleCloseModal}
          book={selectedBook}
        />
      </div>
    );
  }
}
