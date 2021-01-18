import "./Search.css"
import React, { Component } from "react";


class Search extends React.Component{
    getTitleString=(title)=>{
        let searchString=''
        let titleArr=Array.from(title.split(' '))
        for(var i=0;i<titleArr.length;i++){
            if(titleArr[i]!=''){
                searchString+=titleArr[i]
                if(!(i==titleArr.length-1) && titleArr[i+1]!=''){
                    searchString+='+'
                }
            }
        }
        
        return searchString
        
    }
    inputChange=(e)=>{
        var searchString=this.getTitleString(e.target.value)
        this.handleSearch(searchString)
    }
    handleSearch=async(searchString)=>{
        if(searchString==""){
            this.props.setErrorData(null)
            this.props.searchResultList([])
            return
        }
        let response=await fetch('http://www.omdbapi.com/?s='+searchString.valueOf()+'&i=tt3896198&apikey=c6283e6b')
        response=await response.json()
        if(response.Response=="True"){
            this.props.searchResultList(response.Search)
            this.props.setErrorData(null)
        }
        else if(response.Response=="False"){
            this.props.setErrorData(response.Error)
        }
    }
    render(){
        return (
            <div className="search-container">
                <h3>Movie Title:</h3>
                <input onChange={(e)=>{
                    this.inputChange(e)
                }} placeholder="The Revanent" type="text"></input>
            </div>
        )
    }
}


export default Search;
