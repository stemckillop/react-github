import React, { Component } from 'react'
import Link from '../link/link'
import List from '../list/list'
import styled from 'styled-components'

const ProfileWrapper = styled.div`
    width:50%;
    margin: 10px auto;
`

const Avatar = styled.img`
    width:150px;
`

class Profile extends Component {

    constructor() {
        super()
        this.state = {
            data: [],
            repositories: [],
            loading: true,
            error: '',
        }
    }

    async componentDidMount() {
        try {
            const profile = await fetch("https://api.github.com/users/stemckillop")
            const profileJSON = await profile.json()

            if (profileJSON) {

                const repositories = await fetch(profileJSON.repos_url);
                const repositoriesJSON = await repositories.json()

                this.setState({
                    data: profileJSON,
                    repositories : repositoriesJSON,
                    loading: false
                })
            }
        } catch (error) {
            this.setState({
                data: [],
                loading: false,
                error: error.message
            })
        }
    }

    render() {

        const { data, loading, repositories, error } = this.state

        if (loading) {
            return <div>Loading...</div>
        }
        if (loading || error) {
            return <div>{loading ? 'Loading...' : error}</div>
        }

        const items = [
               { label: 'html_url', value: <Link url={data.html_url} title='Github URL' /> },
               { label: 'repos_url', value: data.repos_url },
               { label: 'name', value: data.name},
               { label: 'company', value: data.company },
               { label: 'location', value: data.location },
               { label: 'email', value: data.email },
               { label: 'bio', value: data.bio }
             ]

        const projects = repositories.map(repo => ({
            label: repo.name,
            value: <Link url={repo.html_url} title="Github URL" />
        }))

        return (
            <ProfileWrapper>
                <Avatar className='Profile-avatar' src={data.avatar_url} alt='avatar' />
                <List title="Profile" items={items} />
                <List title="Projects" items={projects} />
            </ProfileWrapper>
        )
    }

}

export default Profile