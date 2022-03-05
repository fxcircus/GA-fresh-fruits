const React = require ('react')
const DefaultLayout = require('../Default.jsx')

class Show extends React.Component {
    render() {
        const { fruit } = this.props
        return(
            <DefaultLayout>
                <div>
                    <article>
                        <h2>
                            {fruit.name}

                        </h2>
                        <h3>{fruit.readyToEat ? 'Is ready to Eat' : 'Is ready to eat'}</h3>
                        <a href={`/fruits/${ fruit._id }/edit`}><button>edit</button></a>
                        <form action={`/fruits/${ fruit._id }?_method=DELETE`} method="POST">
                            <input type="submit" value="Delete"/>
                        </form>
                        <a href="/fruits/"><button>Back to Main</button></a>
                    </article>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Show