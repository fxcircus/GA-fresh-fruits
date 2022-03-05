const React = require ('react')
const DefaultLayout = require ('../Default.jsx')

class Index extends React.Component {
    render() {
        const { fruits } = this.props
        return (
            <DefaultLayout>
                <div>
                    {
                        fruits.map((fruit) => {
                            return (
                                <article>
                                    <a href={`/fruits/${fruit._id}`}>
                                        <h2>
                                            {fruit.name} - { fruit.readyToEat ? 'Ripe' : 'Yuck is nasty' }
                                        </h2>
                                    </a>
                                </article>
                            )
                        })
                    }
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Index