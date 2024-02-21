export declare module Qiita {
    module Entities {
        interface AccessToken {
            client_id: string;
            scopes: string[];
            token: string;
        }
        interface AuthenticatedUser {
            description?: string;
            facebook_id?: string;
            followees_count: number;
            followers_count: number;
            github_login_name?: string;
            id: string;
            items_count: number;
            linkedin_id?: string;
            location?: string;
            name?: string;
            organization?: string;
            permanent_id: number;
            profile_image_url: string;
            twitter_screen_name?: string;
            website_url?: string;
            image_monthly_upload_limit: number;
            image_monthly_upload_remaining: number;
            team_only: boolean;
        }
        interface Comment {
            body: string;
            created_at: string;
            id: string;
            rendered_body: string;
            updated_at: string;
            user: {
                description?: string;
                facebook_id?: string;
                followees_count: number;
                followers_count: number;
                github_login_name?: string;
                id: string;
                items_count: number;
                linkedin_id?: string;
                location?: string;
                name?: string;
                organization?: string;
                permanent_id: number;
                profile_image_url: string;
                twitter_screen_name?: string;
                website_url?: string;
            };
        }
        interface ExpandedTemplate {
            expanded_body: string;
            expanded_tags: any[];
            expanded_title: string;
        }
        interface Item {
            rendered_body: string;
            body: string;
            coediting: boolean;
            created_at: string;
            group: {
                created_at: string;
                id: number;
                name: string;
                private: boolean;
                updated_at: string;
                url_name: string;
            };
            id: string;
            private: boolean;
            tags: any[];
            title: string;
            updated_at: string;
            url: string;
            user: {
                description?: string;
                facebook_id?: string;
                followees_count: number;
                followers_count: number;
                github_login_name?: string;
                id: string;
                items_count: number;
                linkedin_id?: string;
                location?: string;
                name?: string;
                organization?: string;
                permanent_id: number;
                profile_image_url: string;
                twitter_screen_name?: string;
                website_url?: string;
            };
        }
        interface Like {
            created_at: string;
            user: {
                description?: string;
                facebook_id?: string;
                followees_count: number;
                followers_count: number;
                github_login_name?: string;
                id: string;
                items_count: number;
                linkedin_id?: string;
                location?: string;
                name?: string;
                organization?: string;
                permanent_id: number;
                profile_image_url: string;
                twitter_screen_name?: string;
                website_url?: string;
            };
        }
        interface Project {
            rendered_body: string;
            archived: boolean;
            body: string;
            created_at: string;
            id: number;
            name: string;
            updated_at: string;
        }
        interface Tag {
            followers_count: number;
            icon_url?: string;
            id: string;
            items_count: number;
        }
        interface Tagging {
            name: string;
            versions: string[];
        }
        interface Team {
            active: boolean;
            id: string;
            name: string;
        }
        interface Template {
            body: string;
            id: number;
            name: string;
            expanded_body: string;
            expanded_tags: any[];
            expanded_title: string;
            tags: any[];
            title: string;
        }
        interface User {
            description?: string;
            facebook_id?: string;
            followees_count: number;
            followers_count: number;
            github_login_name?: string;
            id: string;
            items_count: number;
            linkedin_id?: string;
            location?: string;
            name?: string;
            organization?: string;
            permanent_id: number;
            profile_image_url: string;
            twitter_screen_name?: string;
            website_url?: string;
        }
    }
}
