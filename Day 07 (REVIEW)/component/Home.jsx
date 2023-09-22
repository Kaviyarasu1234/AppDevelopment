import React, { Component } from 'react';
import './Home.css'; // Import your CSS file

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
    };
  }

  componentDidMount() {
    // Fetch or set recipes data as shown in the previous example
  }

  render() {
    const { recipes } = this.state;

    return (
      <div className="homepage">
        <header>
          <h1>Welcome to the Recipe App</h1>
        </header>
        <main>
          <div className="recipe-list">
            {recipes.map((recipe, index) => (
              <div key={index} className="recipe-card">
                <h2>{recipe.title}</h2>
                <ul>
                  {recipe.ingredients.map((ingredient, i) => (
                    <li key={i}>{ingredient}</li>
                  ))}
                </ul>
                {/* Add more details and actions for each recipe */}
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
