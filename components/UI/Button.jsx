
const Button = ({children, gradient}) => {
  
  const applyGradient = () => {
    if(gradient === "pink-violet") return "pink-violet_gradient"
    else if(gradient === "violet-pink") return "violet-pink_gradient"
    else if(gradient === "violet-gradient") return "violet-gradient"
    else return ""
  }

  return (
    <div className={`button-container ${applyGradient()}`}>
        <button>{children}</button>
    </div>
  )
}

export default Button