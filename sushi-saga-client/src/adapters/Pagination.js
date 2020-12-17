import React, { Component } from 'react';

class Pagination extends Component {

    list = new Array();
    pageList = new Array();
    currentPage = 1;
    numberPerPage = 4;
    numberOfPages = 25;

    makeList = () => {
        numberOfPages = getNumberOfPages();
    }
        
    getNumberOfPages = () => {
        return Math.ceil(list.length / numberPerPage);
    }

    nextPage = () => {
        currentPage += 1;
        loadList();
    }

    loadList = () => {
        var begin = ((currentPage) * numberPerPage);
        var end = begin + numberPerPage;

        pageList = list.slice(begin, end);
    }

    load = () => {
        makeList();
        loadList();
    }

}
export default Pagination;