import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import styled from "styled-components"
import Layout from "../../components/Layout"
import Container from "../../styles/Container"
import Product from "../../styles/Product"
import ProductHeader from "../../styles/ProductHeader"
import ProductForm from "../../styles/ProductForm"
import Colors from "../../components/Colors"
import AddToCart from "../../components/AddToCart"
import {displayPrice} from "../../utils/price"

const Field = styled.div`
    display: grid;
`

const Nylon = ({data}) => {
    console.log(data)

    const image =
        "https://images.ctfassets.net/d3ttfid6hh7h/640yVRzrFYuIM2Ew8sSOOC/1274095d33264b89208a061dab57c757/DSC04584.jpg"
    const description =
        "I don't know about y'all but I want more choices! Pick 1 or 2 colors, mix and match how you please! Check out the add on sayings for your straps. You'll never put them on the wrong hand again! 🙌🏼"
    const price = 25
    const colors = ["red", "orange", "yellow", "green", "blue"]
    const sayings = [
        "MAX EFFORT",
        "LIFT BITCH",
        "PULL LONGER",
        "STRAP UP",
        "DEAD LIFT",
        "SLAY BITCH",
        "LOCAL LEGEND",
        "GYM HERO",
        "SAVAGE LIFE",
        "LIGHT WEIGHT",
        "LIFT SAVAGE",
        "DREAM KILLER",
        "INSTA FAMOUS",
        "WORK BITCH",
    ]

    return (
        <Layout>
            <Container>
                <Product>
                    <div>
                        <img src={image}/>
                        <p>{description}</p>
                    </div>

                    <div>
                        <ProductHeader>
                            <h1>Nylon Strap</h1>
                            <p>{displayPrice(price)}</p>
                        </ProductHeader>

                        <Colors title="Color" colors={colors}/>

                        <ProductForm>
                            <Field>
                                <label>Sayings</label>
                                <select>
                                    {sayings.map((saying, index) => (
                                        <option key={index} value={saying}>
                                            {saying}
                                        </option>
                                    ))}
                                </select>
                            </Field>

                            <AddToCart/>
                        </ProductForm>
                    </div>
                </Product>
            </Container>
        </Layout>
    )
}

Nylon.propTypes = {
    data: PropTypes.object.isRequired,
}

export const query = graphql`
    {
        allContentfulSleeves {
            edges {
                node {
                    contentful_id
                    image {
                        file {
                            url
                        }
                    }
                    name
                    price
                }
            }
        }
    }
`

export default Nylon
