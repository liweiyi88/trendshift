export const config = {
  jwtCookie: 'gti_access_token',
  apiHost: process.env.API_HOST ?? 'http://127.0.0.1:8080',
}

export const getLanguageColor = (language: string): string => {
  switch (language) {
    case 'JavaScript': {
      return '#f1e05a'
    }

    case 'Rust': {
      return '#dea584'
    }

    case 'Ruby': {
      return '#701516'
    }

    case 'Go': {
      return '#00ADD8'
    }

    case 'Python': {
      return '#3572A5'
    }

    case 'PHP': {
      return '#4F5D95'
    }

    case 'Java': {
      return '#b07219'
    }

    case 'C': {
      return '#555555'
    }

    case 'C++': {
      return '#f34b7d'
    }

    case 'TypeScript': {
      return '#3178c6'
    }

    case 'HTML': {
      return '#e34c26'
    }

    case 'Zig': {
      return '#ec915c'
    }

    case 'C#': {
      return '#178600'
    }

    default: {
      return '#DA5B0B'
    }
  }
}

export const routes = {
  repository: '/repository',
  adminRepository: '/admin/repository',
  login: '/login',
}
