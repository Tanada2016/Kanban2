import React from "react";
import "./Block.css";
import plus from "./plus.svg";
import { Link } from "react-router-dom";

export default class Block extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisibleAddButton: true,
            isVisibleSubmitButton: false,
            isVisibleSelect: false,
            textInput: "",
            selectValue: "none"
        };
    };

    render() {
        const {title, id, issues, prevIssues, addCard} = this.props;

        const isBlank = str => {
            return (!str || /^\s*$/.test(str));
        }

        const showInput = (id, event) => {
            event.preventDefault();
            if (id == 0) {
                this.setState({
                    isVisibleAddButton: false,
                    isVisibleSubmitButton: true
                });
            } else {
                if (!prevIssues.length == 0) {
                    this.setState({
                        isVisibleAddButton: false,
                        isVisibleSubmitButton: true,
                        isVisibleSelect: true
                    });
                }
            }
        }

        const handleTextInput = event => {
            this.setState({textInput: event.target.value});
        }

        const handleSelect = event => {
            this.setState({selectValue: event.target.value});
        }

        const handleSubmit = event => {
            event.preventDefault();
            if (id == 0) {
                if (!isBlank(this.state.textInput)) {
                    addCard(this.state.textInput, "Sample Description");
                }
                this.setState({
                    textInput: ""
                });
            } else {
                if(this.state.selectValue != "none") {
                    addCard(id, this.state.selectValue);
                    this.setState({
                        selectValue: "none"
                    });
                }
            }
            this.setState({
                isVisibleAddButton: true,
                isVisibleSubmitButton: false,
                isVisibleSelect: false
            });
        }

        return(
            <div className="block">
                <h2>{title}</h2>
                <div className="wrapper">
                    {issues.map(issue => (
                        <Link to={`/tasks/${issue.id}`} state={{ id: issue.id, blockId: id, name: issue.name, description: issue.description }} className="content-card">{issue.name}</Link>
                    ))}

                    {this.state.isVisibleAddButton && 
                        <button className="add-button" disabled={id !== 0 && prevIssues.length === 0} onClick={(event) => showInput(id, event)}>
                            <img src={plus} alt="Plus Icon" />
                            Add Card
                        </button>
                    }

                    {!this.state.isVisibleAddButton && id == 0 &&
                        <div className="add-issue">
                            <input type="text" className="add-issue" onChange={(e) => handleTextInput(e)} />
                        </div>
                    }

                    {this.state.isVisibleSelect && 
                        <select name="issues" className="move-issue" onChange={(e) => handleSelect(e)}>
                            <option value="none"></option>
                            {prevIssues.map(issue => (
                                <option value={issue.id}>{issue.name}</option>
                            ))}
                        </select>
                    }

                    {this.state.isVisibleSubmitButton &&
                        <input type="submit" value="Submit" className="submit" onClick={(e) => handleSubmit(e)} />
                    }
                </div>
            </div>
        );
    }
}