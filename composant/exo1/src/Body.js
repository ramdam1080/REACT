import React from "react";
import Article from "./Article"
import IMG from "./logo512.png"



class Jsp extends React.Component{
nombreArticle = 2
pageContent
nbrarticle(x){
    console.log(x);
}

 render(){
if (this.nombreArticle >= 2 ) {
    this.pageContent =   <section class="py-5">
                <div class="container py-3 ">
                    <div class="row align-items-center">
                        <div class="col-6">
                <img src={IMG} width= "300" alt="" />
                </div>
                <div class="col-6">                
                    <Article nbrarticle = {this.nbrarticle} titre="les Tartine"/>
                    </div>

                </div>
                </div>
                <div class="container py-3 ">
                    <div class="row align-items-center">
                        <div class="col-6">
                <img src={IMG} width= "300" alt="" />
                </div>
                <div class="col-6">                
                    <Article nbrarticle = {this.nbrarticle} titre="Codingshool"/>
                    </div>

                </div>
                </div>
            </section>;
}else{
    this.pageContent = <section class="text-center">
        <h1 class="text-warning">Il n'y a pas d'article</h1>
    </section>
}
        return(
         this.pageContent
        )
    }
}

export default Jsp