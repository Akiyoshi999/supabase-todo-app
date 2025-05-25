# .env を読み込む
include .env

# supabase のデータベースをリセット
sb-reset:
	supabase db reset

# supabase のデータベースをプッシュ
sb-push:
	supabase db push

# supabase を起動
sb-start:
	supabase start

# 本番環境のデータベースのスキーマ
sb-gen-schema:
	npx supabase gen types typescript --local > src/types/database.types.ts