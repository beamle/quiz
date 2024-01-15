import s from './Loader.module.scss'

export const Loader = ({ loading }: { loading: boolean }) => {
  return (
    <div className={`${s.loadingContainer} ${loading ? s.visible : s.hidden}`}>
      <div className={s.loader}></div>
      <p>Laen...</p>
    </div>
  )
}
