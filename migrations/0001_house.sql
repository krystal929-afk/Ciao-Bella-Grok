create table if not exists floor_tables (
  id text primary key,
  area text not null,
  seats integer not null,
  label text not null
);

insert into floor_tables (id, area, seats, label) values
  ('D1', 'dining', 2, 'Dining 1'),
  ('D2', 'dining', 2, 'Dining 2'),
  ('D3', 'dining', 2, 'Dining 3'),
  ('D4', 'dining', 2, 'Dining 4'),
  ('D5', 'dining', 4, 'Dining 5'),
  ('D6', 'dining', 4, 'Dining 6'),
  ('D7', 'dining', 4, 'Dining 7'),
  ('D8', 'dining', 4, 'Dining 8'),
  ('D9', 'dining', 6, 'Dining 9'),
  ('D10', 'dining', 6, 'Dining 10'),
  ('D11', 'dining', 8, 'Dining 11'),
  ('P1', 'patio', 2, 'Patio 1'),
  ('P2', 'patio', 2, 'Patio 2'),
  ('P3', 'patio', 2, 'Patio 3'),
  ('P4', 'patio', 4, 'Patio 4'),
  ('P5', 'patio', 4, 'Patio 5')
on conflict (id) do nothing;

create table if not exists reservations (
  id text primary key,
  code text not null unique,
  guest_name text not null,
  email text not null,
  phone text not null,
  party integer not null,
  area text not null,
  table_id text not null references floor_tables (id),
  service_date date not null,
  start_min integer not null,
  notes text not null default '',
  status text not null default 'booked',
  created_at timestamptz not null default now(),
  constraint reservations_status check (status in ('booked', 'seated', 'done', 'no-show', 'cancelled')),
  constraint reservations_party check (party between 1 and 8)
);

create index if not exists reservations_night on reservations (service_date, status);

create table if not exists orders (
  id text primary key,
  code text not null unique,
  guest_name text not null,
  phone text not null,
  email text not null default '',
  pickup_date date not null,
  pickup_min integer not null,
  items jsonb not null,
  total_cents integer not null,
  notes text not null default '',
  status text not null default 'placed',
  created_at timestamptz not null default now(),
  constraint orders_status check (status in ('placed', 'ready', 'picked-up', 'cancelled'))
);

create table if not exists inbox (
  id text primary key,
  kind text not null,
  code text,
  name text not null,
  email text not null default '',
  phone text not null default '',
  summary text not null,
  body text not null default '',
  status text not null default 'open',
  created_at timestamptz not null default now(),
  constraint inbox_kind check (kind in ('party', 'catering', 'job', 'letter')),
  constraint inbox_status check (status in ('open', 'done', 'held', 'sent'))
);
