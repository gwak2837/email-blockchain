import { LockTwoTone, UnlockTwoTone } from '@ant-design/icons'
import { Button, Checkbox, Input } from 'antd'
import { useState, useCallback } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import Footer from 'src/components/Footer'
import { sleep } from 'src/utils/commons'
import styled from 'styled-components'
import NavigationLayout from '../components/layouts/NavigationLayout'
import PageHead from '../components/layouts/PageHead'

const FlexContainerCenterCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
`

const CenterH1 = styled.h1`
  text-align: center;
`

const GridContainerForm = styled.form`
  display: grid;
  grid-template-columns: minmax(auto, 370px);
  justify-content: center;

  padding: 1rem;
`

const ContinueLoginDiv = styled.div`
  margin: 0 0 1rem;
  text-align: right;
`

const RedText = styled.h5`
  margin: 0.5rem 0.2rem;
  color: #800000;
`

const validateEmail = {
  required: '필수 항목입니다.',
  maxLength: {
    value: 64,
    message: '최대 64글자 이하로 입력해주세요.',
  },
  pattern: {
    value: /\S+@\S+\.\S+/,
    message: '이메일을 형식에 맞게 입력해주세요.',
  },
}

const validatePassword = {
  required: '필수 항목입니다.',
  minLength: {
    value: 8,
    message: '최소 8글자 이상 입력해주세요.',
  },
}

const PASSWORD_INPUT_ICONS = [
  <UnlockTwoTone key={1} style={{ fontSize: '1.2rem' }} twoToneColor="#c4801a" />,
  <LockTwoTone key={2} style={{ fontSize: '1.2rem' }} twoToneColor="#52c41a" />,
]

function renderPasswordInputIcon(visible: boolean) {
  return visible ? PASSWORD_INPUT_ICONS[0] : PASSWORD_INPUT_ICONS[1]
}

type LoginFormValues = {
  email: string
  password: string
  remember: boolean
}

function HomePage() {
  const [loading, setIsLoading] = useState(false)

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormValues>({
    defaultValues: { email: '', password: '', remember: true },
  })

  const onSubmit = useCallback<SubmitHandler<LoginFormValues>>(async ({ email, password }) => {
    setIsLoading(true)

    console.log({ email, password })
    await sleep(3000)

    setIsLoading(false)
  }, [])

  return (
    <PageHead>
      <NavigationLayout>
        <FlexContainerCenterCenter>
          <div>
            <CenterH1>로그인</CenterH1>
            <GridContainerForm onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="email">
                <h4>이메일</h4>
                <Controller
                  control={control}
                  name="email"
                  render={({ field }) => (
                    <Input
                      disabled={loading}
                      placeholder="example@email.com"
                      size="large"
                      type="email"
                      {...field}
                    />
                  )}
                  rules={validateEmail}
                />
                <RedText>{errors.email ? errors.email.message : <br />}</RedText>
              </label>

              <label htmlFor="password">
                <h4>비밀번호</h4>
                <Controller
                  control={control}
                  name="password"
                  render={({ field }) => (
                    <Input.Password
                      disabled={loading}
                      iconRender={renderPasswordInputIcon}
                      placeholder="qwer1234!"
                      size="large"
                      type="password"
                      {...field}
                    />
                  )}
                  rules={validatePassword}
                />
                <RedText>{errors.password ? errors.password.message : <br />}</RedText>
              </label>

              <ContinueLoginDiv>
                <Controller
                  control={control}
                  name="remember"
                  render={({ field }) => (
                    <Checkbox checked={field.value} disabled={loading} {...field}>
                      로그인 유지
                    </Checkbox>
                  )}
                />
              </ContinueLoginDiv>

              <Button loading={loading} htmlType="submit" size="large">
                로그인
              </Button>
            </GridContainerForm>
          </div>
        </FlexContainerCenterCenter>
        <Footer />
      </NavigationLayout>
    </PageHead>
  )
}

export default HomePage
