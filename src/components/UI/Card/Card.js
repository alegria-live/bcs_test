import React from 'react';
import { Card, Avatar } from 'antd';
const { Meta } = Card;

export class CardComp extends React.Component {

    render() {
        return (
            <Card
                style={{ width: 300, margin: '0.6rem 2.5rem 0 3rem'}}
                bodyStyle={{ padding: 10 }}>
                <Meta
                    avatar={
                        <Avatar shape="square" size={54} src={this.props.img} />
                    }
                    title="Show details"
                    description={this.props.switch}
                />
            </Card>
        )
    }
};
export default CardComp 