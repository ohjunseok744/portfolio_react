// Vite의 구성 파일을 정의하기 위해 필요한 함수와 React 플러그인을 불러옵니다.
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite의 구성 파일을 정의합니다. 이 파일은 Vite가 프로젝트를 어떻게 처리할지 설정합니다.
export default defineConfig({
  
  // Vite에서 사용할 플러그인을 정의합니다.
  plugins: [
    // React 플러그인을 사용합니다. 이는 Vite가 React 코드를 처리할 수 있게 해줍니다.
    react()
  ]
})
