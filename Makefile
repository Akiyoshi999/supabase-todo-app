# .env を読み込む
include .env

# 本番
## supabase のデータベースをプッシュ
sb-push:
	supabase db push
	
# ローカル
# supabase のデータベースをリセット
sb-reset:
	supabase db reset


# supabase を起動
sb-start:
	npx supabase start

sb-stop:
	npx supabase stop

# 本番環境のデータベースのスキーマ
sb-gen-schema:
	npx supabase gen types typescript --local > src/types/database.types.ts

# マイグレーションファイル作成
sb-migration-new:
	supabase migration new <migration_name>
