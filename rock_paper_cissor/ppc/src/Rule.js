import React from "react";
import img from "./images/image-rules.svg"

class Rule extends React.Component {
  render() {
    return (
      <div className=" ">


        <button type="button" class="btn rule" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          rule
        </button>


        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">RULE</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body text-center">
                <img src={img} alt="" />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
export default Rule